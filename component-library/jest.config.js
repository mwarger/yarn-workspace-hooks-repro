module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/config/test-preprocessor.js"
  },
  testMatch: ["**/__tests__/*.(test|spec).(ts|tsx|js)"],
  snapshotSerializers: ["jest-emotion"],
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js")
  }
};
