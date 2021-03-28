import { RobotPosition } from "../type";

export default function cellContent(
  robotPosition: RobotPosition,
  rowId: number,
  colId: number
): string {
  if (rowId === robotPosition.x && colId === robotPosition.y) {
    return "X";
  } else {
    return "";
  }
}
