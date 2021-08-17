const LogFileInputClass = require('./LogFileInput');
const LogFileReaderClass = require('./LogFileReader');
class LogFileManager {
    
    _args: Array<Object>;
    
    constructor(args: Array<Object>) {
        this._validate(args);
    }

    _validate(args: Array<Object>) {

        if(!args)
            throw new Error("The arguments --input and --output was not passed!");            
        
        if(args[0] !== '--input')
            throw new Error("The --input argument is required!");

        if(args[2] !== '--output')
            throw new Error("The --output argument is required!");
            
        this._args = args;

        return true;
    }

    run(){
        console.log(this._args);
        const pathInput = this._args[1];
        const fileInput = new LogFileInputClass(pathInput);
        const fileReader = new LogFileReaderClass(fileInput);
        return fileReader.read();
    }
}

module.exports = LogFileManager;