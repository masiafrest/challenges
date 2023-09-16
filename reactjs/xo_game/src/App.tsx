import { useState } from "react";
import "./App.css";

type PlayerPiece = "x" | "o";
type Board = PlayerPiece[];

const initialBoardState: Board = new Array(9).fill("");

function App() {
  const [history, setHistory] = useState([initialBoardState]);
  const currBoardRound = history.length - 1;
  const isXTurn = currBoardRound % 2 === 0;
  const currBoard = history[currBoardRound];
  const winner = checkWinner(currBoard);
  const isFilled = currBoard.every((c) => Boolean(c));
  if (!winner && isFilled) {
    window.alert("its a tie");
    reset();
    return;
  }
  if (winner) {
    window.alert(`winner is ${winner}, game will reset`);
    reset();
  }

  const handlePlay = (newBoard: Board) => {
    setHistory([...history, newBoard]);
  };
  function reset() {
    setHistory([initialBoardState]);
  }
  function undo() {
    if (currBoardRound > 0) {
      setHistory((prevH) => {
        return prevH.slice(0, -1);
      });
    }
  }
  const disabledBtn = currBoardRound === 0;
  return (
    <main>
      <Board board={currBoard} isXTurn={isXTurn} onChange={handlePlay} />
      <button onClick={reset} disabled={disabledBtn}>
        reset
      </button>
      <button onClick={undo} disabled={disabledBtn}>
        undo
      </button>
    </main>
  );
}

export default App;

type BoardProps = {
  board: Board;
  isXTurn: boolean;
  onChange: (board: Board) => void;
};
function Board({ board, isXTurn, onChange }: BoardProps) {
  const handleClick = (idx: number) => {
    const currBoardCell = board[idx];
    if (currBoardCell) return;
    const newBoard = board.slice();
    newBoard[idx] = isXTurn ? "x" : "o";
    onChange(newBoard);
  };
  return (
    <div className="board">
      {board.map((c, i) => {
        return (
          <Cell
            key={i}
            onClick={() => {
              handleClick(i);
            }}
            label={c}
          />
        );
      })}
    </div>
  );
}

type CellProps = { onClick: () => void; label: string };
function Cell({ onClick, label }: CellProps) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className="cell" onClick={handleClick}>
      {label}
    </button>
  );
}

const winnerIdxPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWinner = (board: Board) => {
  const filterWinnerPos = winnerIdxPos.filter((t) => {
    const a = t[0];
    return Boolean(board[a]);
  });
  console.log({ filterWinnerPos, board });
  for (let i = 0; i < filterWinnerPos.length; ++i) {
    const [a, b, c] = filterWinnerPos[i];
    if (board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return "";
};
