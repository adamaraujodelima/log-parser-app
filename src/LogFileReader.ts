import FileInputInterface from "./Interfaces/FileInputInterface";
import FileReaderInterface from "./Interfaces/FileReaderInterface";

class LogFileReader implements FileReaderInterface {
    
    _file: FileInputInterface;

    constructor(file: FileInputInterface){
        this._file = file;   
    }

    _validate(lineData: Array<String>): Boolean {
        return lineData && lineData.length === 3 && lineData[0] !== null && lineData[1] !== null && lineData[2] !== null && lineData[1] === 'error';
    }

    read(): Array<Object>{
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

export default LogFileReader;