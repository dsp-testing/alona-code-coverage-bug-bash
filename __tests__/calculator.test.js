const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('adds two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-1, 1)).toBe(0);
  });

  test('subtracts two numbers', () => {
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.subtract(1, 5)).toBe(-4);
  });

  test('multiplies two numbers', () => {
    expect(calc.multiply(3, 4)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
    expect(calc.divide(-6, 3)).toBe(-2);
  });

  // divide-by-zero, power and factorial are NOT tested
});
