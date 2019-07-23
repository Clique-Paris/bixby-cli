
export class CapsuleId {
    private company: string;
    private name: string;

    constructor(id: string);
    // tslint:disable-next-line:unified-signatures
    constructor(company: string, name: string)
    constructor(id?: string, company?: string, name?: string) {
        this.company = "testCompany";
        this.name = "testName";
        if (typeof id !== "undefined" || (id !== undefined && id !== null)) {
            const parsedId = id.match(/^([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)$/i);
            if (
                (parsedId !== undefined) &&
                (parsedId !== null) &&
                (parsedId[1] !== undefined) &&
                (parsedId[1] !== null) &&
                (parsedId[2] !== undefined) &&
                (parsedId[2] !== null)
            ) {
                this.company = parsedId[1];
                this.name = parsedId[2];
            } else {
                this.company = "playground";
                this.name = "testCapsule";
            }
        } else {
            if (typeof company !== "undefined") {
                if (typeof name !== "undefined") {
                    this.company = company;
                    this.name = name;
                } else {
                    this.name = "testName";
                }
            } else {
                this.company = "testCompany";
            }
        }
    }

    public capsuleName(): string {
        return this.name;
    }
    get capsuleCompany(): string {
        return this.company;
    }
    public toString(): string {
        return `${this.company}.${this.name}`;
    }
    public toBxb(): string {
        return `id(${this.company}.${this.name})`;
    }

}
