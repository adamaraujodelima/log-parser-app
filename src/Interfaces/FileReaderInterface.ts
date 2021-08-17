import FileInputInterface from "./FileInputInterface";

interface FileReaderInterface {
    _file: FileInputInterface;
    _validate(lines: Array<Object>): Boolean;
    read(): Array<Object>;
}

export default FileReaderInterface;