import { ErrorCode } from "./ErrorCode.enum";

export class CustomError implements Error {
    public message: string;
    public name: string;
    public stack?: string | undefined;
    private code: ErrorCode;

    constructor(code: ErrorCode, name: string = ErrorCode[code], message: string, stack: string) {
        this.code = code;
        if (name !== undefined && name !== null) {
            this.name = name;
        } else {
            this.name = ErrorCode[code];
        }
        this.stack = stack;
        this.message = message;
    }

    public toString(): string {
        return `Code: ${this.code} - [${this.name}] - ${this.message} - ${this.stack}`;
    }
}
