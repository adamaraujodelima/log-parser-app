import { FileInput } from '../src/FileInput';

test('Should fail without directory file input', () => {
    expect(new FileInput()).toThrowError('The directory of file is required!');
});

test('Should fail directory file input if it not exists', () => {
    expect(new FileInput('/tmp/somefileinput')).toThrowError('The file doesnt exists!');
});

test('Should fail directory file input if it is corrupted', () => {
    expect(new FileInput('/tmp/somefileinput')).toThrowError('The file it is corrupted!');
});

test('Should fail directory file input if it is too large', () => {
    expect(new FileInput('/tmp/somefileinput')).toThrowError('The file it is greater than 1gb!');
});

