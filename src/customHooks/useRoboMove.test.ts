// we want to make a test for the custom hook that controls the robot.
import { renderHook, act } from "@testing-library/react-hooks";
import useRoboMove, { AllowedPositions } from "./useRoboMoves";
describe("checking all direction Robo move along with boundary points", () => {
  test("check whether the hook initializes the start position", () => {
    const { result } = renderHook(() => useRoboMove(5));
    expect(result.current.roboPosition).toEqual({ x: 0, y: 0 });
  });

  test("Move robo in the foward/left direction", () => {
    const { result } = renderHook(() => useRoboMove(5));
    act(() => {
      /* fire events that update state */
      result.current.updatePosition(AllowedPositions.LEFT);
    });

    expect(result.current.roboPosition).toEqual({ x: 0, y: 1 });
  });

  test("Move robo in the backward/right direction", () => {
    const { result } = renderHook(() => useRoboMove(5));

    act(() => {
      /* fire events that update state */
      result.current.updatePosition(AllowedPositions.LEFT);
    });
    act(() => {
      /* fire events that update state */
      result.current.updatePosition(AllowedPositions.RIGHT);
    });
    expect(result.current.roboPosition).toEqual({ x: 0, y: 0 });
  });

  test("Robo cannot move forward at its has reached end of the board", () => {
    const { result } = renderHook(() => useRoboMove(5, { x: 0, y: 4 }));
    act(() => {
      /* fire events that update state */
      result.current.updatePosition(AllowedPositions.LEFT);
    });
    expect(result.current.roboPosition).toEqual({ x: 0, y: 4 });
  });
  test("Move Robo down from the initial position of 0, 0", () => {
    const { result } = renderHook(() => useRoboMove(5));
    act(() => {
      /* fire events that update state */
      result.current.updatePosition(AllowedPositions.DOWN);
    });
    expect(result.current.roboPosition).toEqual({ x: 1, y: 0 });
  });
});
