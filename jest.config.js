const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@common/(.*)$": "<rootDir>/common/$1",
    "^@features/(.*)$": "<rootDir>/features/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@types/(.*)$": "<rootDir>/types/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
