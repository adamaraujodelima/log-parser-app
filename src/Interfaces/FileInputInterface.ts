interface FileInputInterface {
    _path: string;
    _validate(): Boolean;
    getFile(): Buffer;
}

export default FileInputInterface;