import { getInputChallenge } from "../services/adventofcode";

const dict = {
  "(": 1,
  ")": -1,
};

function run() {
  partOne();
  partTwo();
}

const partOne = () => {
  getInputChallenge({ year: 2015, day: 1 })
    .then((res) => {
      let sum = 0;

      for (let char of res.data) {
        sum += dict[char as keyof typeof dict];
      }

      console.log({ sum });
    })
    .catch((err) => {
      console.error({ err });
    });
};

const partTwo = () => {
  getInputChallenge({ year: 2015, day: 1 })
    .then((res) => {
      const text = res.data;
      let sum = 0;
      let pos = 0;
      for (let i = 0; i < text.length; i++) {
        sum += dict[text[i] as keyof typeof dict];

        if (sum === -1) {
          pos = i + 1;
          break;
        }
      }
      console.log({ sum, pos });
    })
    .catch((err) => console.error({ err }));
};

run();
