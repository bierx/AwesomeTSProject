import {exec} from 'child_process';
import {device} from 'detox';

const execPromise = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else if (stderr) {
        reject(new Error(stderr));
      } else {
        resolve(stdout);
      }
    });
  });
};

export const setDeviceLocation = (lat: number, long: number) => {
  if (device.getPlatform() === 'android') {
    return device.setLocation(lat, long);
  } else {
    return execPromise(
      `applesimutils --byId ${device.id} --setLocation "[${lat}, ${long}]"`,
    );
  }
};
