import React from "react";
// import { RobotPosition } from "../type";
import "./game.css";
// interface CellPosition {
//   x: number;
//   y: number;
// }

interface CellProps {
  rowId: number;
  colId: number;
  text?: string;
  key: string;
}

export default function Cell({ rowId, colId, text, key }: CellProps) {
  return (
    <div className="row" data-rowId={rowId} data-colId={colId} key={key}>
      {text}
    </div>
  );
}
