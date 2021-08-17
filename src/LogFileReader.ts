import FileInputInterface from "./Interfaces/FileInputInterface";
import FileReaderInterface from "./Interfaces/FileReaderInterface";

class LogFileReader implements FileReaderInterface {
    
    _file: FileInputInterface;

    constructor(file: FileInputInterface){
        this._file = file;        
    }

    _validate(): Boolean {
        return true;
    }

    read(): Array<Object>{
        const file = this._file.getFile().toString();        
        console.log(file);
        return [];
    }         
}

export default LogFileReader;