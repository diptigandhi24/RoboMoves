import React from "react";
// import { RobotPosition } from "../type";
import "./game.css";
// interface CellPosition {
//   x: number;
//   y: number;
// }

interface CellProps {
  rowId: string;
  colId: string;
  children?: string;
  id: string;
}

export default function Cell({ rowId, colId, children, id }: CellProps) {
  return (
    <div className="row" data-rowId={rowId} data-colId={colId} id={id}>
      {`P:${rowId} x ${colId}`}
      {children}
    </div>
  );
}
