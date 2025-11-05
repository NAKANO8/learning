import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum 関数", () => {
  it("2 + (3 * 4)", () => {
    expect(sum(2, 4)).toBe(14);
  });
});

