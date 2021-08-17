"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileInput_1 = __importDefault(require("../src/LogFileInput"));
const LogFileReader_1 = __importDefault(require("../src/LogFileReader"));
describe('File Reader Class Unit Test', () => {
    test('Should fail with invalid format content', () => {
        expect(() => {
            const fileInput = new LogFileInput_1.default('/app/data/validFile.log');
            const fileReader = new LogFileReader_1.default(fileInput);
        }).toThrowError(new Error('The file input argument was not passed!'));
    });
});
