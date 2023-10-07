module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};