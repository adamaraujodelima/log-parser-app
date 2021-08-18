import { writeFile } from "fs";
import FileOutputInterface from "./Interfaces/FileOutputInterface";
import FileReaderInterface from "./Interfaces/FileReaderInterface";

class LogFileOutput implements FileOutputInterface{
    
    _file: FileReaderInterface;
    _output: string;
    
    constructor(file: FileReaderInterface, output: string){
        this._file = file;
        this._output = output;
        this._validate();
    }

    _validate(): boolean {
        if(!this._output)
            throw new Error('The directory of output is required!');
        return true;
    }

    export(): void{
        const fileContent = this._file.read();
        writeFile(this._output, JSON.stringify(fileContent),'utf-8', (error) => {
            if (error) {
                throw error;
            }
        })
    }
}

export default LogFileOutput;