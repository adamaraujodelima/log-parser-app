import FileInputInterface from "./FileInputInterface";

interface FileReaderInterface {
    _file: FileInputInterface;
    _validate(): Boolean;
    read(): Array<Object>;
}

export default FileReaderInterface;