"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const LogFileInput_1 = __importDefault(require("../src/LogFileInput"));
describe('File Input Class Unit Test', () => {
    test('Should fail with empty directory file input', () => {
        expect(() => {
            const fileInput = new LogFileInput_1.default('');
        }).toThrowError(new Error('The directory of file is required!'));
    });
    test('Should fail file input if not exists', () => {
        expect(() => {
            const fileInput = new LogFileInput_1.default('./somefile.log');
        }).toThrowError(new Error('The file doesnt exists!'));
    });
    test('Should fail file input if is empty', () => {
        expect(() => {
            const fileInput = new LogFileInput_1.default('/app/data/emptyFile.log');
        }).toThrowError(new Error('The file cannot be empty!'));
    });
    // test('Should fail file input if it is too large', () => {
    //     expect(() => {
    //         const fileInput = new LogFileInput('/app/data/validFile.log');
    //     }).toThrowError(new Error("The file it's greather than 1gb!"));
    // });
    test('Should return valid buffer file with same content', async () => {
        const path = '/app/data/validFile.log';
        const fileResponse = fs_1.readFileSync(path);
        const fileInput = new LogFileInput_1.default(path);
        const file = fileInput.getFile();
        expect(file.equals(fileResponse)).toBe(true);
    });
});
