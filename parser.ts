const [,, args] = process.argv;

const LogFileManagerClass = require('./src/LogFileManager');

const fileManager = new LogFileManagerClass(args);

console.log(fileManager.run());