import { performance } from 'perf_hooks';
import { Light, RenderFrameCallback } from './types';

class Renderer {
  lights: Light[];
  private queue: RenderFrameCallback[];
  private onRenderCallback: (lights: Light[]) => void;
  private intervalRef;

  constructor({ lights, onRender }: { lights: Light[]; onRender: (lights: Light[]) => void }) {
    this.resetQueue();
    this.init(lights, onRender);
  }

  private init(lights: Light[], onRender: (lights: Light[]) => void) {
    this.lights = [...lights];
    this.onRenderCallback = onRender;
  }

  private resetQueue() {
    this.queue = [];
  }

  start() {
    if (this.intervalRef) clearInterval(this.intervalRef);
    this.intervalRef = setInterval(() => this.render(), 20);
  }

  stop() {
    clearInterval(this.intervalRef);
    this.intervalRef = null;
  }

  requestFrame(callback) {
    this.queue.push(callback);
  }

  private render() {
    const now = performance.now();

    const finalQueue = [...this.queue];
    this.queue.length = 0;

    for (let i = 0; i < finalQueue.length; i++) {
      finalQueue[i]({ now, lights: this.lights });
    }

    this.onRenderCallback(this.lights);
  }
}

export default Renderer;
