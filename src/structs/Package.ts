import * as _package from "../../package.json";

export class Package {
    name: string;
    version: string;
    description: string;

    constructor () {
        this.name = _package.name;
        this.version = _package.version;
        this.description = _package.description;
    }
}