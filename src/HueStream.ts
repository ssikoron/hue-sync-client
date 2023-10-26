import Streamer from './Streamer';
import { HueStreamConfig, Light } from './types';
import { createMessage } from './utils';
import Renderer from './Renderer';

export default class HueStream {
  private streamer: Streamer;
  private renderer: Renderer;

  constructor(config: HueStreamConfig) {
    this.streamer = new Streamer(config);
    this.renderer = null;
  }

  start() {
    this.streamer.start().then(() => {
      this.renderer = new Renderer({
        lights: this.streamer.getLightsContext(),
        onRender: this.sendStream.bind(this)
      });
      this.renderer.start();
    });
  }

  stop() {
    this.renderer.stop();
    this.streamer.stop();
  }

  sendStream(lights: Light[]) {
    this.streamer.sendStream(createMessage(lights));
  }

  addAnimation(callback: ({ lights, progress }) => void, duration: number, delay = 0) {
    const start = performance.now() + delay;
    const end = performance.now() + duration + delay;

    const _animate = ({ lights, now }) => {
      if (now < start) {
        this.renderer.requestFrame(_animate);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      callback({ lights, progress });
      progress < 1 && this.renderer.requestFrame(_animate);
    };

    this.renderer.requestFrame(_animate);
  }
}
