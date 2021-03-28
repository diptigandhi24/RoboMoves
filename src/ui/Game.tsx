import "./game.css";

import BoardView from "./BoardView";
interface NumberOfCells {
  squareBoardSize: number;
}
//each cell holds the state
interface LooseObject {
  [key: string]: "";
}
export default function Game(props: NumberOfCells) {
  let noOfRows: Array<number> = [...new Array(props.squareBoardSize)];
  noOfRows.length = props.squareBoardSize;
  const boardTemplateinfo: LooseObject = {};

  for (let row = 0; row < props.squareBoardSize; row++) {
    for (let col = 0; col < props.squareBoardSize; col++) {
      boardTemplateinfo[`${row}${col}`] = "";
    }
  }

  console.log("Before Template", boardTemplateinfo);

  return (
    <div
      className="boardWrapper"
      style={{
        gridTemplateColumns: `repeat(${props.squareBoardSize}, 1fr)`,
        gridTemplateRows: `repeat(${props.squareBoardSize}, 1fr)`,
      }}
    >
      <BoardView
        boardTemplate={boardTemplateinfo}
        intialPosition={{ x: 0, y: 0 }}
      />
    </div>
  );
}
