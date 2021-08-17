import { writeFile } from "fs";
import FileReaderInterface from "./Interfaces/FileReaderInterface";

class LogFileOutput {
    
    _file: FileReaderInterface;
    _output: string;
    
    constructor(file: FileReaderInterface, output: string){
        this._file = file;
        this._output = output;
    }

    generateFile(){
        const fileContent = this._file.read();
        writeFile(this._output, JSON.stringify(fileContent),'utf-8', (error) => {
            if (error) {
                throw error;
            }
        })
    }
}

export default LogFileOutput;