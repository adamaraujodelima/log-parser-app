"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileOutput_1 = __importDefault(require("./LogFileOutput"));
const LogFileInput_1 = __importDefault(require("./LogFileInput"));
const LogFileReader_1 = __importDefault(require("./LogFileReader"));
class LogFileManager {
    constructor(args) {
        this._args = args;
    }
    validate() {
        if (this._args.length === 0)
            throw new Error("The arguments --input and --output was not passed. E.g: node parser.js --input {path_of_file} --output {path_of_new_file}.");
        if (this._args[0] !== '--input')
            throw new Error("The --input argument is required!");
        if (this._args[1] === undefined)
            throw new Error("The value of --input argument is required!");
        if (this._args[2] !== '--output')
            throw new Error("The --output argument is required!");
        if (this._args[3] === undefined)
            throw new Error("The value of --output argument is required!");
        return true;
    }
    run() {
        const fileOutput = new LogFileOutput_1.default(new LogFileReader_1.default(new LogFileInput_1.default(this._args[1])), this._args[3]);
        fileOutput.export();
    }
}
exports.default = LogFileManager;
