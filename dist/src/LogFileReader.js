"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogFileReader {
    constructor(file) {
        this._file = file;
    }
    _validate(lineData) {
        return lineData && lineData.length === 3 && lineData[0] !== null && lineData[1] !== null && lineData[2] !== null && lineData[1] === 'error';
    }
    read() {
        const file = this._file.getFile().toString();
        const lines = file.split(/\r?\n/);
        return lines.filter((line) => {
            const lineData = line.split(' - ');
            return this._validate(lineData);
        }).map((line) => {
            const lineData = line.split(' - ');
            const timestamp = (new Date(lineData[0])).getTime();
            const detailsError = JSON.parse(lineData[2]);
            return {
                timestamp,
                loglevel: 'error',
                transactionId: detailsError['transactionId'],
                err: detailsError['err'],
            };
        });
    }
}
exports.default = LogFileReader;
