/* eslint-disable react/prop-types */
import { useState } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(square);
  let notice;
  if (winner) {
    notice = `Winner ${winner}`;
  } else {
    notice = `Next Player : ${xIsNext ? "X" : "O"}`;
  }

  function handleOnClick(idx) {
    if (square[idx] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[idx] = "X";
    } else {
      nextSquare[idx] = "O";
    }
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>{notice}</div>
      <div className="flex">
        <Square value={square[0]} handleOnClick={() => handleOnClick(0)} />
        <Square value={square[1]} handleOnClick={() => handleOnClick(1)} />
        <Square value={square[2]} handleOnClick={() => handleOnClick(2)} />
      </div>
      <div className="flex">
        <Square value={square[3]} handleOnClick={() => handleOnClick(3)} />
        <Square value={square[4]} handleOnClick={() => handleOnClick(4)} />
        <Square value={square[5]} handleOnClick={() => handleOnClick(5)} />
      </div>
      <div className="flex">
        <Square value={square[6]} handleOnClick={() => handleOnClick(6)} />
        <Square value={square[7]} handleOnClick={() => handleOnClick(7)} />
        <Square value={square[8]} handleOnClick={() => handleOnClick(8)} />
      </div>
    </>
  );
}

export default Board;
