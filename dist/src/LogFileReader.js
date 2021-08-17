"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogFileReader {
    constructor(file) {
        this._file = file;
    }
    _validate() {
        return true;
    }
    read() {
        const file = this._file.getFile().toString();
        console.log(file);
        return [];
    }
}
exports.default = LogFileReader;
