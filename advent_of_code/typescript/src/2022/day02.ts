import { getInputChallenge } from "../services/adventofcode";

enum GameRes {
  win = 6,
  draw = 3,
  lost = 0,
}

enum HandValue {
  rock = 1,
  paper,
  scissor,
}

getInputChallenge({ year: 2022, day: 2 })
  .then((res) => {
    const data = res.data.split("\n");
    partOne(data);
    partTwo(data);
  })
  .catch((e) => console.error(e));

function partOne(data: string[]) {
  class RockPaperScissor {
    rules: {
      rock: { val: number; beat: string; label: string };
      paper: { val: number; beat: string; label: string };
      scissor: { val: number; beat: string; label: string };
    };

    constructor() {
      this.rules = {
        rock: { val: 1, beat: "scissor", label: "AX" },
        paper: { val: 2, beat: "rock", label: "BY" },
        scissor: { val: 3, beat: "paper", label: "CZ" },
      };
    }

    #getHand(label: string) {
      if (this.rules.rock.label.includes(label)) {
        return "rock";
      }
      if (this.rules.paper.label.includes(label)) {
        return "paper";
      }
      return "scissor";
    }

    #getResult(handOpp: string, handMe: string): GameRes {
      if (handOpp === handMe) {
        return GameRes.draw;
      }
      const oppBeat = this.rules[handOpp as keyof typeof this.rules].beat;
      if (oppBeat === handMe) {
        return GameRes.lost;
      }
      return GameRes.win;
    }

    roundRes(opponent: string, me: string) {
      const handOpp = this.#getHand(opponent);
      const handMe = this.#getHand(me);
      const oppVal = this.rules[handOpp as keyof typeof this.rules].val;
      const meVal = this.rules[handMe as keyof typeof this.rules].val;

      const result = this.#getResult(handOpp, handMe);
      return result + meVal;
    }
  }

  const game = new RockPaperScissor();
  let sum = 0;
  data.forEach((e: string) => {
    if (e) {
      const [opp, me] = e.split(" ");
      sum += game.roundRes(opp, me);
    }
  });
  console.log({ sum });
}

const handMap = {
  A: "rock",
  B: "paper",
  C: "scissor",
} as const;

type HandMapKeys = keyof typeof handMap;
type HandMapValues = typeof handMap[HandMapKeys];

type Strategy = "X" | "Y" | "Z";
function partTwo(data: string[]) {
  let sum = 0;
  data.forEach((e) => {
    if (e) {
      const [opp, me] = e.split(" ");
      const handOpp: HandMapValues = handMap[opp as HandMapKeys];
      console.log({opp, handOpp, me})
      if (me === "Y") {
        sum += GameRes.draw + HandValue[handOpp];
        return;
      }
      if (me === "X") {
        if (handOpp === "scissor") {
          sum += HandValue.paper;
        }
        if (handOpp === "paper") {
          sum += HandValue.rock;
        }
        if (handOpp === "rock") {
          sum += HandValue.scissor;
        }
        return;
      }
      sum += GameRes.win
      if (handOpp === "scissor") {
        sum += HandValue.rock;
      }
      if (handOpp === "paper") {
        sum += HandValue.scissor;
      }
      if (handOpp === "rock") {
        sum += HandValue.paper;
      }
    }
  });

  console.log('part 2',{sum})
}
