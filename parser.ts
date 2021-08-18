import LogFileManager from "./src/LogFileManager";

const args = process.argv.splice(2);

const fileManager = new LogFileManager(args);

if(fileManager.validate()){    
    fileManager.run();
}


