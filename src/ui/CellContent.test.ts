import cellContent from "./CellContent";

test("cell content is empty when it's not the robot position", () => {
  let result = cellContent({ x: 0, y: 0 }, 0, 1);

  expect(result).toBe("");
});

test("cell content is X when it robotPosition", () => {
  let result = cellContent({ x: 0, y: 0 }, 0, 0);

  expect(result).toBe("X");
});
