export default () => {
  return {
    collectCoverage: true,
    coverageReporters: ["text"],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
    preset: "ts-jest",
    resetModules: true,
    transform: {
      "^.+\\.(ts|tsx)": "ts-jest",
      "^.+\\.(js|jsx)": "babel-jest",
    },
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
    verbose: true,
  };
};
