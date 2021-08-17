const FileManagerClass = require('../src/LogFileManager');

describe('File Manager Class Unit Test', () => {    
    
    test('Should fail with empty arguments', () => {
        expect(() => {
            const fileManager = new FileManagerClass();
        }).toThrowError(new Error('The arguments --input and --output was not passed!'));
    });

    test('Should fail without --input argument', () => {
        const args = [
            './custom-logs.log',
            '--output',
            './custom-error-logs.json',
        ];
        expect(() => {
            const fileManager = new FileManagerClass(args);
        }).toThrowError(new Error('The --input argument is required!'));
    });

    test('Should fail without --output argument', () => {
        const args = [
            '--input',
            './custom-logs.log',
            './custom-error-logs.json',
        ];
        expect(() => {
            const fileManager = new FileManagerClass(args);
        }).toThrowError(new Error('The --output argument is required!'));
    });

    test('Should success with arguments', () => {
        const args = [
            '--input',
            './custom-logs.log',
            '--output',
            './custom-error-logs.json',
        ];
        const fileManager = new FileManagerClass(args);            
        expect(fileManager).toBeInstanceOf(FileManagerClass);
    });
});

