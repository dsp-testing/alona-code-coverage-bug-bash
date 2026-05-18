# Code Coverage Test

A test repository for validating the code coverage upload action.

## Running tests

```bash
npm install
npm test
```

Tests are intentionally partial to produce interesting coverage reports:
- `src/calculator.js`: ~30% covered (only add, subtract, multiply tested)
- `src/stringUtils.js`: ~40% covered (only capitalize and reverseString tested)
- `src/arrayUtils.js`: 0% covered (no tests)
