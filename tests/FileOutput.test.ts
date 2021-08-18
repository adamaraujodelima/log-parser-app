import { readFileSync } from "fs";
import LogFileInput from "../src/LogFileInput";
import LogFileOutput from "../src/LogFileOutput";
import LogFileReader from "../src/LogFileReader";

describe('File Output Class Unit Test', () => {
    test('Should fail with empty directory file output', () => {
        expect(() => {
            const fileInput = new LogFileOutput(new LogFileReader(new LogFileInput('/app/data/validFile.log')), '');
        }).toThrowError(new Error('The directory of output is required!'));
    });
});

