
import { runner } from '../main';

test('Should fail without arguments', () => {
    expect(runner([])).toThrowError('The arguments was not passed!');
});

test('Should fail without --input argument', () => {
    const args = [
        './custom-logs.log',
        '--output',
        './custom-error-logs.json',
    ];
    expect(runner(args)).toBe('The argument --input is required!');
});

test('Should fail without --output argument', () => {
    const args = [
        '--input',
        './custom-logs.log',
        './custom-error-logs.json',
    ];
    expect(runner(args)).toBe('The argument ouput is required');
});

test('Should fail without value of --output argument', () => {
    const args = [
        '--input',
        './custom-logs.log',
        '--output',
    ];
    expect(runner(args)).toBe('The value of --output argument cannot be empty!');
});

test('Should fail without value of --input argument', () => {
    const args = [
        '--input',
        '--output',
        './custom-error-logs.json',
    ];
    expect(runner(args)).toBe('The value of --input argument cannot be empty!');
});

test('Should success with arguments', () => {
    const args = [
        '--input',
        './custom-logs.log',
        '--output',
        './custom-error-logs.json',
    ];
    expect(runner(args)).toBe('Logs file generated with success!');
});