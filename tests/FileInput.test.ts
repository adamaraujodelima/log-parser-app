import { readFileSync } from "fs";
import LogFileInput from "../src/LogFileInput";

describe('File Input Class Unit Test', () => {
    test('Should fail with empty directory file input', () => {        
        expect(() => {
            const fileInput = new LogFileInput('');        
        }).toThrowError(new Error('The directory of file is required!'));
    });
    
    test('Should fail file input if not exists', () => {
        expect(() => {
            const fileInput = new LogFileInput('./somefile.log');
        }).toThrowError(new Error('The file doesnt exists!'));
    });
    
    test('Should fail file input if is empty', () => {
        expect(() => {
            const fileInput = new LogFileInput('/app/data/emptyFile.log');
        }).toThrowError(new Error('The file cannot be empty!'));
    });

    test('Should return valid buffer file with same content', async () => {
        const path = '/app/data/validFile.log';
        const fileResponse = readFileSync(path);
        const fileInput = new LogFileInput(path);
        const file = fileInput.getFile();
        expect(file.equals(fileResponse)).toBe(true);
    });
});

