import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2022, day: 5 })
  .then((res) => {
    const data = res.data.split("\n");
    console.log(solve(data));
  })
  .catch((err) => console.log({ err }));

function solve(input: string[]): { partOne: string } {
  const idx = input.findIndex((e) => e === "");
  let crates = input.slice(0, idx - 1);
  const procedure = input.slice(idx + 1);

  const colIdx = input[idx - 1]
    .split("")
    .map((e, idx) => {
      if (e.trim()) {
        return idx;
      }
      return e;
    })
    .filter((e) => e !== " ");

  const newCrates: string[][] = [];

  colIdx.forEach((colIdx, idx) => {
    const col: string[] = [];
    crates.forEach((l) => {
      const cell = l[Number(colIdx)];
      if (cell.trim()) {
        col.push(cell);
      }
    });
    newCrates.push(col);
  });

  // crates.forEach(l => {
  //   const newLines : string[]= []
  //   colIdx.forEach(( e, idx ) => {
  //     newLines.push(l[e as any] )
  //   })
  //   newCrates.push(newLines)
  // })

  const newProc = procedure.map((l) => {
    return l.split(" ").filter(Number).map(Number);
  });

  newProc.forEach((e, id) => {
    const move = e[0];
    const from = e[1] - 1;
    const to = e[2] - 1;

    for (let i = 0; i < move; i++) {
      const shifted = newCrates[from].shift();
      if (shifted) {
        newCrates[to].unshift(shifted);
      }
    }
  });

  const topCrates: string[] = [];
  newCrates.forEach((cols) => {
    topCrates.push(cols[0]);
  });

  return { partOne: topCrates.join("") };
}
