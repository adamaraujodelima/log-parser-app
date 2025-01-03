"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class LogFileOutput {
    constructor(file, output) {
        this._file = file;
        this._output = output;
    }
    _validate() {
        if (!this._output)
            throw new Error('The directory of output is required!');
        return true;
    }
    export() {
        const fileContent = this._file.read();
        fs_1.writeFile(this._output, JSON.stringify(fileContent), 'utf-8', (error) => {
            if (error) {
                throw error;
            }
        });
    }
}
exports.default = LogFileOutput;
