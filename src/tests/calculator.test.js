const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator functions - basic arithmetic', () => {
  test('addition: 2 + 3 = 5 (from image)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6 (from image)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90 (from image)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4 (from image)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('supports floating point arithmetic (toBeCloseTo)', () => {
    expect(add(2.5, 1.1)).toBeCloseTo(3.6, 10);
  });

  test('handles negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
    expect(multiply(-4, 3)).toBe(-12);
    expect(add(-2, 5)).toBe(3);
  });

  test('division by zero throws', () => {
    expect(() => divide(5, 0)).toThrow();
    expect(() => divide(0, 0)).toThrow();
  });

  test('large numbers and precision', () => {
    expect(multiply(1e6, 3)).toBe(3e6);
  });
});
