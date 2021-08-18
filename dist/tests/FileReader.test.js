"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileInput_1 = __importDefault(require("../src/LogFileInput"));
const LogFileReader_1 = __importDefault(require("../src/LogFileReader"));
describe('File Reader Class Unit Test', () => {
    test('Should return empty object with invalid format content', () => {
        const fileReader = new LogFileReader_1.default(new LogFileInput_1.default('/app/data/invalidFileFormat.log'));
        const fileContent = fileReader.read();
        expect(fileContent).toStrictEqual([]);
    });
    test('Should return a valid object with valid format content', async () => {
        const fileReader = new LogFileReader_1.default(new LogFileInput_1.default('/app/data/validFile.log'));
        expect(fileReader.read()).toEqual(expect.arrayContaining([
            expect.objectContaining({
                "err": "Not found",
                "loglevel": "error",
                "timestamp": 1628475171259,
                "transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
            }),
        ]));
    });
});
