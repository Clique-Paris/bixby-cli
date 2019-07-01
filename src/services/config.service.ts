const Configstore = require("configstore");
import { Package } from "../structs/Package";

export class ConfigService {
    private config: any;
    private pkg: Package;
    constructor() {
        this.pkg = new Package();
        this.config = new Configstore(this.pkg.name);
    }

    public get(key: string): any {
        return this.config.get(key);
    }
    public set(key: string, value: any) {
        return this.config.set(key, value);
    }
}
