import { FileReader } from '../src/FileReader';

test('Should fail with invalid format data in file according by scope', () => {
    expect(new FileReader('/tmp/somefileinput')).toThrowError('The format of data in file is invalid!');
});