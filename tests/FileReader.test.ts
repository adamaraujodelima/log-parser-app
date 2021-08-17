import LogFileInput from '../src/LogFileInput';
import LogFileReader from '../src/LogFileReader';

describe('File Reader Class Unit Test', () => {

    test('Should fail with invalid format content', () => {
        expect(() => {            
            const fileInput = new LogFileInput('/app/data/validFile.log');
            const fileReader = new LogFileReader(fileInput);
        }).toThrowError(new Error('The file input argument was not passed!'));
   
    });
});

