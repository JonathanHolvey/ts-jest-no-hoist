# Failing hoisted jest.mock calls with CommonJS imports

Hoisting of auto mocking modules with `jest.mock('module-name')` does not work in a CommonJS test file when using the `ts-jest` config preset for Jest. To reproduce the issue:

```bash
# Clone the repo
git clone https://github.com/JonathanHolvey/ts-jest-no-hoist.git
cd ts-jest-no-hoist
# Install the dependencies
npm clean-install
# Run the demo tests
npm run test
```

The `hoist.test.js` test suite (where the `jest.mock` call appears after the `require` call) will fail to run, as the `mockReturnValue` function doesn't exist on the imported module - it hasn't been mocked.
The `no-hoist.test.js` test suite (where the `jest.mock` call appears before the `require`) will pass as expected.

Otherwise, the two test suites are identical.
