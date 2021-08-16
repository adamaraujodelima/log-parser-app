import { FileOutput } from '../src/FileOutput';

test('Should fail without directory file input', () => {
    expect(new FileOutput()).toThrowError('The directory of file is required!');
});

test('Should fail directory file input if it not exists', () => {
    expect(new FileOutput()).toThrowError('The file doesnt exists!');
});

test('Should fail directory file input if it is corrupted', () => {
    expect(new FileOutput()).toThrowError('The file it is corrupted!');
});

test('Should fail directory file input if it is too large', () => {
    expect(new FileOutput()).toThrowError('The file it is greater than 1gb!');
});

