import { initializeTimes, updateTimes } from "./App";

// Mock fetchAPI globally for tests
global.fetchAPI = (date) => ["17:00", "18:00", "19:00", "20:00"];

test("initializeTimes returns a non-empty array of available times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns new times based on the dispatched date", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2026-05-10" };
  const result = updateTimes(state, action);
  expect(result.length).toBeGreaterThan(0);
});