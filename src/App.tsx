import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useRoboMove from "./customHooks/useRoboMoves";
import { AllowedPositions } from "./type";
import Game from "./ui/Game";

function App() {
  // add the hook
  // hook gives you robot position, pass into Game
  // add buttons
  // connect buttons to hook
  let boardSize = 5;
  let initialRobotPos = { x: 0, y: 0 };
  const { roboPosition, updatePosition } = useRoboMove(boardSize, {
    x: initialRobotPos.x,
    y: initialRobotPos.y,
  });
  return (
    <div className="App">
      <h1 id="welcome">WelCome to Puppeteer</h1>
      <Game
        squareBoardSize={boardSize}
        robotPosition={{ x: roboPosition.x, y: roboPosition.y }}
        id="test"
      />
      <button
        type="button"
        onClick={(event) => updatePosition(AllowedPositions.DOWN)}
        value="DOWN"
      >
        Down
      </button>
      <button
        type="button"
        onClick={(event) => updatePosition(AllowedPositions.UP)}
        value="UP"
      >
        Up
      </button>
      <button
        type="button"
        onClick={(event) => updatePosition(AllowedPositions.LEFT)}
        value="LEFT"
      >
        Left
      </button>
      <button
        type="button"
        onClick={(event) => updatePosition(AllowedPositions.RIGHT)}
        value="RIGHT"
      >
        Right
      </button>
    </div>
  );
}

export default App;
