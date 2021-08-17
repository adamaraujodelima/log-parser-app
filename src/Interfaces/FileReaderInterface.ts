interface FileReaderInterface {
    _file: FileInputInterface;
    _validate(file: FileInputInterface): Boolean;
    read(): Array<Object>;
}