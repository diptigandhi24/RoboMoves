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

export default function useRoboMove(boardDimensions: number) {
  const [roboPosition, privateUpdateRoboPosition] = useState<RobotPosition>({
    x: 0,
    y: 0,
  });

  function updatePosition(pos: AllowedPositions) {
    // TODO update the position internally based on where we're supposed to move and the current position.
  }

  return { roboPosition, updatePosition };
}
