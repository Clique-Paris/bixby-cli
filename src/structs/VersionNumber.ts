import { CustomError } from "./CustomError";
import { ErrorCode } from "./ErrorCode.enum";

export class VersionNumber implements Number {

    private value: number;

    constructor(value: number) {
        if (parseInt(value.toString(), undefined) !== value) {
            throw new CustomError(
                ErrorCode.invalidVersionNumber,
                undefined,
                "version number is not an integer",
                "VersionNumber");
        }
        if (value < 0) {
            throw new CustomError(
                ErrorCode.invalidVersionNumber,
                undefined,
                "version number is a negatif number",
                "VersionNumber",
            );
        }
        this.value = value;
    }

    public update(value: number = this.value + 1): void {
        this.value = value;
    }

    public toString(): string {
        return `${this.value}`;
    }

    public toFixed(fractionDigits?: number | undefined): string {
        return this.value.toFixed(fractionDigits);
    }
    public toExponential(fractionDigits?: number | undefined): string {
        return this.value.toExponential(fractionDigits);
    }
    public toPrecision(precision?: number | undefined): string {
        return this.value.toPrecision(precision);
    }
    public valueOf(): number {
        return this.value;
    }
    public toLocaleString(
        locales?: string | string[] | undefined,
        options?: Intl.NumberFormatOptions | undefined,
    ): string {
        return this.value.toLocaleString(locales, options);
    }
}
