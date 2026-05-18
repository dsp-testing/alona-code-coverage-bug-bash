const { unique, flatten, chunk } = require('../src/arrayUtils');

describe('arrayUtils', () => {
  test('unique removes duplicates', () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
  });

  test('flatten handles nested arrays', () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flatten([])).toEqual([]);
  });

  test('chunk splits array into groups', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  // groupBy and intersection still not tested
});
