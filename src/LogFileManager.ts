import LogFileInput from "./LogFileInput";
import LogFileOutput from "./LogFileOutput";
import LogFileReader from "./LogFileReader";
class LogFileManager {
    
    _args: string[];
    
    constructor(args: string[]) {
        this._args = args;
        this._validate();
    }

    _validate() {

        if(this._args.length === 0)
            throw new Error("The arguments --input and --output was not passed!");            
        
        if(this._args[0] !== '--input')
            throw new Error("The --input argument is required!");

        if(this._args[2] !== '--output')
            throw new Error("The --output argument is required!");
            
        return true;
    }

    run(){
        console.log(this._args);
        const pathInput = this._args[1];
        const fileInput = new LogFileInput(pathInput);
        const fileReader = new LogFileReader(fileInput);
        const fileOutput = new LogFileOutput(fileReader, this._args[3]);
        return fileOutput.generateFile();
    }
}

export default LogFileManager;