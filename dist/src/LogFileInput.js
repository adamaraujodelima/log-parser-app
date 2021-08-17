"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class LogFileInput {
    constructor(path) {
        this._path = path;
        this._validate();
    }
    _validate() {
        if (!this._path)
            throw new Error("The directory of file is required!");
        if (fs.existsSync(this._path) === false)
            throw new Error("The file doesnt exists!");
        const stats = fs.statSync(this._path);
        const fileSizeInBytes = stats.size;
        if (fileSizeInBytes === 0)
            throw new Error("The file cannot be empty!");
        const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes > 1000)
            throw new Error("The file it's greather than 1gb!");
        return true;
    }
    getFile() {
        const file = fs.readFileSync(this._path);
        return file;
    }
}
exports.default = LogFileInput;
