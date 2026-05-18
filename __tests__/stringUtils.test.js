const { capitalize, reverseString } = require('../src/stringUtils');

describe('stringUtils', () => {
  test('capitalize works', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
    expect(capitalize(null)).toBe('');
  });

  test('reverseString works', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('ab')).toBe('ba');
  });

  // isPalindrome, truncate, countWords are NOT tested
});
