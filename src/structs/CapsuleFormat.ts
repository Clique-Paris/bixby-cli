export class CapsuleFormat {
    private value: 3;

    constructor(value: 3) {
        this.value = value;
    }

    public toString(): string {
        return this.value.toString();
    }
    public toBxb(): string {
        return `format(${this.value})`;
    }
}
