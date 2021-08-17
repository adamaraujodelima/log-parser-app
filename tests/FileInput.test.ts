import { readFileSync } from "fs";
const FileInputClass = require('../src/LogFileInput');

describe('File Input Class Unit Test', () => {
    test('Should fail without directory file input', () => {        
        expect(() => {
            const fileInput = new FileInputClass();        
        }).toThrowError(new Error('The directory of file is required!'));
    });
    
    test('Should fail file input if not exists', () => {
        expect(() => {
            const fileInput = new FileInputClass('./somefile.log');
        }).toThrowError(new Error('The file doesnt exists!'));
    });
    
    test('Should fail file input if is empty', () => {
        expect(() => {
            const fileInput = new FileInputClass('/app/tests/data/emptyFile.log');
        }).toThrowError(new Error('The file cannot be empty!'));
    });

    // test('Should fail file input if it is too large', () => {
    //     expect(() => {
    //         const fileInput = new FileInputClass('/app/tests/data/validFile.log');
    //     }).toThrowError(new Error("The file it's greather than 1gb!"));
    // });
    
    test('Should return valid buffer file with same content', async () => {
        const path = '/app/tests/data/validFile.log';
        const fileResponse = readFileSync(path);
        const fileInput = new FileInputClass(path);
        const file = fileInput.getFile();
        expect(file.equals(fileResponse)).toBe(true);
    });
});

