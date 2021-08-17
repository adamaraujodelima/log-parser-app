const FileReaderClass = require('../src/LogFileReader');

describe('File Reader Class Unit Test', () => {

    test('Should fail without File Input Interface', () => {
        expect(() => {
            const fileReader = new FileReaderClass();
        }).toThrowError(new Error('The arguments --input and --output was not passed!'));
    });
    
});

