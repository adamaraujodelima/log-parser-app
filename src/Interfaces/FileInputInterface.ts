interface FileInputInterface {
    _file: Buffer;
    _validate(path: string): any;
    getFile(): Buffer;
}