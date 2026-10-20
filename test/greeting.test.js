import assert from "node:assert/strict";
import test from "node:test";
import { greet } from "../src/greeting.js";

test("greet returns the expected greeting", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});
