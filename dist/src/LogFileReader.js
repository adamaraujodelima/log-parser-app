"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogFileReader {
    constructor(file) {
        this._file = file;
        this._content = [];
    }
    _validate(lines) {
        return true;
    }
    read() {
        const file = this._file.getFile().toString();
        const lines = file.split(/\r?\n/);
        if (this._validate(lines)) {
            lines.forEach((line) => {
                const lineData = line.split(' - ');
                if (lineData[1] === 'error') {
                    const timestamp = (new Date(lineData[0])).getTime();
                    const detailsError = JSON.parse(lineData[2]);
                    this._content.push({
                        timestamp,
                        loglevel: 'error',
                        transactionId: detailsError['transactionId'],
                        err: detailsError['err'],
                    });
                }
            });
        }
        return this._content;
    }
}
exports.default = LogFileReader;
