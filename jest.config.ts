// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // ta racine de code
  roots: ["<rootDir>/src"],
  // fichiers test reconnus
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // support des imports absolus (si tu utilises "src/*")
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
