"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogFileManager_1 = __importDefault(require("./src/LogFileManager"));
const args = process.argv.splice(2);
const fileManager = new LogFileManager_1.default(args);
if (fileManager.validate()) {
    fileManager.run();
}
