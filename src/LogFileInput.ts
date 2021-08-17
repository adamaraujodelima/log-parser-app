const fs = require('fs');
class LogFileInput implements FileInputInterface {

    _file: Buffer;

    constructor(path: string) {
        this._validate(path);
    }

    _validate(path: string) {

        if (!path)
            throw new Error("The directory of file is required!");

        if (fs.existsSync(path) === false)
            throw new Error("The file doesnt exists!");

        const stats = fs.statSync(path);
        const fileSizeInBytes = stats.size;

        if (fileSizeInBytes === 0)
            throw new Error("The file cannot be empty!");

        const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes > 1000)
            throw new Error("The file it's greather than 1gb!");

        this._file = fs.readFileSync(path);

        return true;
    }

    getFile(): Buffer {
        return this._file;
    }
}

module.exports = LogFileInput;