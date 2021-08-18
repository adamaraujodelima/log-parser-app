"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileInput_1 = __importDefault(require("../src/LogFileInput"));
const LogFileOutput_1 = __importDefault(require("../src/LogFileOutput"));
const LogFileReader_1 = __importDefault(require("../src/LogFileReader"));
describe('File Input Class Unit Test', () => {
    test('Should fail with empty directory file output', () => {
        expect(() => {
            const fileInput = new LogFileOutput_1.default(new LogFileReader_1.default(new LogFileInput_1.default('/app/data/validFile.log')), '');
        }).toThrowError(new Error('The directory of output is required!'));
    });
});
