"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileManager_1 = __importDefault(require("../src/LogFileManager"));
describe('File Manager Class Unit Test', () => {
    test('Should fail with empty arguments', () => {
        expect(() => {
            const fileManager = new LogFileManager_1.default([]);
        }).toThrowError(new Error('The arguments --input and --output was not passed. E.g: node parser.js --input {path_of_file} --output {path_of_new_file}.'));
    });
    test('Should fail without --input argument', () => {
        const args = [
            './custom-logs.log',
            '--output',
            './custom-error-logs.json',
        ];
        expect(() => {
            const fileManager = new LogFileManager_1.default(args);
        }).toThrowError(new Error('The --input argument is required!'));
    });
    test('Should fail without --output argument', () => {
        const args = [
            '--input',
            './custom-logs.log',
            './custom-error-logs.json',
        ];
        expect(() => {
            const fileManager = new LogFileManager_1.default(args);
        }).toThrowError(new Error('The --output argument is required!'));
    });
    test('Should success with arguments', () => {
        const args = [
            '--input',
            './custom-logs.log',
            '--output',
            './custom-error-logs.json',
        ];
        const fileManager = new LogFileManager_1.default(args);
        expect(fileManager).toBeInstanceOf(LogFileManager_1.default);
    });
});
