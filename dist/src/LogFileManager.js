"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileInput_1 = __importDefault(require("./LogFileInput"));
const LogFileOutput_1 = __importDefault(require("./LogFileOutput"));
const LogFileReader_1 = __importDefault(require("./LogFileReader"));
class LogFileManager {
    constructor(args) {
        this._args = args;
        this._validate();
    }
    _validate() {
        if (this._args.length === 0)
            throw new Error("The arguments --input and --output was not passed!");
        if (this._args[0] !== '--input')
            throw new Error("The --input argument is required!");
        if (this._args[2] !== '--output')
            throw new Error("The --output argument is required!");
        return true;
    }
    run() {
        console.log(this._args);
        const pathInput = this._args[1];
        const fileInput = new LogFileInput_1.default(pathInput);
        const fileReader = new LogFileReader_1.default(fileInput);
        const fileOutput = new LogFileOutput_1.default(fileReader, this._args[3]);
        return fileOutput.generateFile();
    }
}
exports.default = LogFileManager;
