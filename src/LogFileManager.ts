import LogFileOutput from "./LogFileOutput";
import LogFileInput from "./LogFileInput";
import LogFileReader from "./LogFileReader";
class LogFileManager {
    
    _args: string[];

    constructor(args: string[]) {
        this._args = args;        
    }

    validate(): boolean {

        if(this._args.length === 0)
            throw new Error("The arguments --input and --output was not passed. E.g: node parser.js --input {path_of_file} --output {path_of_new_file}.");
        
        if(this._args[0] !== '--input')
            throw new Error("The --input argument is required!");

        if(this._args[1] === undefined)
            throw new Error("The value of --input argument is required!");
            
        if(this._args[2] !== '--output')
            throw new Error("The --output argument is required!");
            
        if(this._args[3] === undefined)
            throw new Error("The value of --output argument is required!");

        return true;
    }

    run(): void{
        const fileOutput = new LogFileOutput(new LogFileReader(new LogFileInput(this._args[1])), this._args[3]);
        fileOutput.export();
    }
}

export default LogFileManager;