// we want to make a test for the custom hook that controls the robot.
import { renderHook, act } from "@testing-library/react-hooks";
import useRoboMove from "./useRoboMoves";

test("check whether the hook initializes the start position", () => {
  const { result } = renderHook(() => useRoboMove(5));
  expect(result.current.roboPosition).toEqual({ x: 0, y: 0 });
});
