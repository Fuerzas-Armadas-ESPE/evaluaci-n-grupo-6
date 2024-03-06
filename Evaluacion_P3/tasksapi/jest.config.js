module.exports = {
    "roots": ["C:/Matthew 2023-2024/WebAvanzado/evaluaci-n-grupo-6/Evaluacion_P3/tasksapi/src"],
    "testRegex": "(/test/.*|(\\.|/)(test|spec))\\.ts?$",
    "transform": {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    "moduleFileExtensions": ['ts', 'js', 'json'],
    "testEnvironment": 'node',
    "moduleNameMapper": {
      "^src/(.*)$": "<rootDir>/src/$1"
    },
};