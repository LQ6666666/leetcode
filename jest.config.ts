module.exports = {
  rootDir: __dirname,
  preset: "ts-jest",
  testMatch: ['<rootDir>/**/__tests__/**/*test.ts'],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: ['/node_modules/'],
};
