import {initializeTimes, updateTimes} from "./App";

test("initalzeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same state it receives", () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = updateTimes(currentState, { type: "UPDATE_TIMES", date: "2026-05-10" });
  expect(result).toEqual(currentState);
});