import { useState } from "react";

// board dimensions is the size of the board that the robot can move on.

export enum AllowedPositions {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

interface RobotPosition {
  x: number;
  y: number;
}

const boundaryCheckPoints = {
  startPoint: 0,
  endPoint: 0,
  forwardBoundaryCheck: function forwardMoveCheck(currentPos: number) {
    if (currentPos + 1 <= this.endPoint) {
      return currentPos + 1;
    } else {
      return currentPos;
    }
  },
  reverseBoundaryCheck: function ReverseMoveCheck(currentPos: number) {
    if (currentPos - 1 >= this.startPoint) {
      return currentPos - 1;
    } else {
      return currentPos;
    }
  },
};
export default function useRoboMove(boardSize: number) {
  const [roboPosition, privateUpdateRoboPosition] = useState<RobotPosition>({
    x: 0,
    y: 0,
  });
  boundaryCheckPoints.endPoint = boardSize - 1;

  function updatePosition(pos: AllowedPositions) {
    // TODO update the position internally based on where we're supposed to move and the current position.
    let direction = AllowedPositions[pos];
    // x =row, y = column
    switch (direction) {
      case "UP":
        privateUpdateRoboPosition((prevState) => {
          let newPosition = Object.assign(
            {},
            prevState,
            (prevState.x = boundaryCheckPoints.reverseBoundaryCheck(
              prevState.x
            ))
          );
          return newPosition;
        });
        break;
      case "DOWN":
        privateUpdateRoboPosition((prevState) => {
          let newPosition = Object.assign(
            {},
            prevState,
            (prevState.x = boundaryCheckPoints.forwardBoundaryCheck(
              prevState.x
            ))
          );
          return newPosition;
        });
        break;
      case "LEFT":
        privateUpdateRoboPosition((prevState) => {
          let newPosition = Object.assign(
            {},
            prevState,
            (prevState.y = boundaryCheckPoints.forwardBoundaryCheck(
              prevState.y
            ))
          );
          return newPosition;
        });
        break;

      case "RIGHT":
        privateUpdateRoboPosition((prevState) => {
          let newPosition = Object.assign(
            {},
            prevState,
            (prevState.y = boundaryCheckPoints.reverseBoundaryCheck(
              prevState.y
            ))
          );
          return newPosition;
        });
        break;
      default:
        console.log("Couldn't find the value you are looking for");
    }
  }

  return { roboPosition, updatePosition };
}
