import LogFileManager from "./src/LogFileManager";

const args = process.argv.splice(2);

const fileManager = new LogFileManager(args);

fileManager.run();

