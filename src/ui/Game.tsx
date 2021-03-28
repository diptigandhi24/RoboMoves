import { RobotPosition } from "../type";
import "./game.css";
import Cell from "./Cell";
import cellContent from "./CellContent";
interface GameProps {
  squareBoardSize: number;
  robotPosition: RobotPosition;
}

export default function Game(props: GameProps) {
  let indices = Array.from({ length: props.squareBoardSize }, (_, i) => i);

  return (
    <div
      className="boardWrapper"
      style={{
        gridTemplateColumns: `repeat(${props.squareBoardSize}, 1fr)`,
        gridTemplateRows: `repeat(${props.squareBoardSize}, 1fr)`,
      }}
    >
      {indices.map((row) =>
        indices.map((column) => (
          <Cell
            rowId={row}
            colId={column}
            key={`${row}${column}`}
            text={cellContent(
              {
                x: props.robotPosition.x,
                y: props.robotPosition.y,
              },
              row,
              column
            )}
          />
        ))
      )}
    </div>
  );
}
