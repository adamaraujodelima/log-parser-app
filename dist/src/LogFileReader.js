class LogFileReader {
    constructor(file) {
        this._validate(file);
    }
    _validate(file) {
        if (!file)
            throw new Error("The file argument was not passed!");
        this._file = file;
        return true;
    }
    read() {
        const file = this._file.getFile();
        return [];
    }
}
module.exports = LogFileReader;
