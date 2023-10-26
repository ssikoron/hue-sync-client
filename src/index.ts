import HueStream from './HueStream';
import config from '../configs/config.json';

const hueStream = new HueStream(config);

hueStream.start();

setTimeout(() => {
  hueStream.addAnimation(({ lights, progress }) => {
    lights.forEach((light) => {
      light.brightness = progress;
    });
  }, 2000);

  hueStream.addAnimation(
    ({ lights, progress }) => {
      lights.forEach((light) => {
        light.brightness = 1 - progress;
      });
    },
    2000,
    2000
  );

  hueStream.addAnimation(
    ({ lights, progress }) => {
      lights.forEach((light) => {
        light.brightness = progress;
      });
    },
    2000,
    4000
  );
}, 4000);
