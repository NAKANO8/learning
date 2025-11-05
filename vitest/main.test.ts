import { calc } from "./calc";

describe("calc", () => {
  describe("mul", () => {
    it("4 * 4 = 16", () => {
      expect(calc.mul(4, 4)).toBe(16);
    });
  });
  describe("div", () => {
    it("16 / 4 = 4", () => {
      expect(calc.div(16, 4)).toBe(4);
    });
  });
});

