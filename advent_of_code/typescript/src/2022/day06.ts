import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2022, day: 6 })
  .then((res) => {
    const data = res.data.split("\n");
    const example = [
      "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
      "bvwbjplbgvbhsrlpgdmjqwftvncz",
      "nppdvjthqldpwncqszvftbrmjlhg",
      "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
    ];
    solve(data, 4);
    solve(data, 14);
  })
  .catch((err) => console.log({ err }));

// const MARKER = 4
const MARKER = 14;
function solve(input: string[], MARKER:number) {
  input.forEach((e) => {
    if (e) {
      for (let i = 0; i < e.length; i++) {
        const group = e.slice(i, i + MARKER);
        if (group.length === MARKER) {
          const seen = new Set();
          for (let g of group) {
            if (seen.has(g)) {
              break;
            } else {
              seen.add(g);
            }
          }
          if (seen.size === MARKER) {
            console.log({ anwers: i + MARKER, MARKER });
            break;
          }
        }
      }
    }
  });
}
