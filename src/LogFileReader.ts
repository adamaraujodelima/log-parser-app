import FileInputInterface from "./Interfaces/FileInputInterface";
import FileReaderInterface from "./Interfaces/FileReaderInterface";

class LogFileReader implements FileReaderInterface {
    
    _file: FileInputInterface;
    _content: Array<Object>;

    constructor(file: FileInputInterface){
        this._file = file;   
        this._content = [];
    }

    _validate(lines: Array<Object>): Boolean {
        return true;
    }

    read(): Array<Object>{
        const file = this._file.getFile().toString();
        const lines = file.split(/\r?\n/);
        if(this._validate(lines)){
            lines.forEach((line) => {
                const lineData = line.split(' - ');
                if(lineData[1] === 'error'){
                    const timestamp = (new Date(lineData[0])).getTime();
                    const detailsError = JSON.parse(lineData[2]);
                    this._content.push({
                        timestamp,
                        loglevel: 'error',
                        transactionId: detailsError['transactionId'],
                        err: detailsError['err'],
                    })
                }
            });
        }        
        return this._content;
    }         
}

export default LogFileReader;