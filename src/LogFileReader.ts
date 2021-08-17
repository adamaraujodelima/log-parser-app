
class LogFileReader implements FileReaderInterface {
    
    _file: FileInputInterface;

    constructor(file: FileInputInterface){
        this._validate(file);
    }

    _validate(file: FileInputInterface): Boolean {
        if(!file)
            throw new Error("The file argument was not passed!");
            
        this._file = file;
        return true;
    }

    read(): Array<Object>{
        const file = this._file.getFile();
        return [];
    }         
}

module.exports = LogFileReader;