import FileReaderInterface from "./FileReaderInterface";

interface FileOutputInterface {
    _file: FileReaderInterface;
    _output: string;
    _validate(): Boolean;
    export(): void;
}

export default FileOutputInterface;