import { useState } from "react";
import { RobotPosition } from "../type";
import Cell from "./Cell";

interface BoardProps {
  boardTemplate: object;
  intialPosition: RobotPosition;
}

function getRowIdColId(id: string) {
  let ids = Array.from(id);
  //   console.log("Array from String", ids);
  return { row: ids[0], col: ids[1] };
}
export default function BoardView(props: BoardProps) {
  let boardContainer = [];
  console.log("Board Template", props.boardTemplate);
  for (const cell in props.boardTemplate) {
    let currRC = getRowIdColId(cell);
    let cellContent = " ";
    if (
      parseInt(currRC.row) === props.intialPosition.x &&
      parseInt(currRC.col) === props.intialPosition.y
    ) {
      cellContent = "X";
    }
    boardContainer.push(
      <Cell
        rowId={currRC.row}
        colId={currRC.col}
        id={cell}
        children={cellContent}
      />
    );
  }

  return <>{boardContainer}</>;
}
