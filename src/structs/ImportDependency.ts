import { CapsuleId } from "./CapsuleId";
import { SemanticVersion } from "./SemanticVersion";

export class ImportDependency {
    private capsule: CapsuleId;
    private version: SemanticVersion;
    private alias: string;

    constructor(
        capsule: CapsuleId,
        version: SemanticVersion,
        alias?: string,
    ) {
        this.capsule = capsule;
        this.version = version;
        if (alias !== undefined && alias !== null) {
            this.alias = alias;
        } else {
            this.alias = this.capsule.capsuleName();
        }
    }

    public toBxb(): string {
        return `
        import (${this.capsule.toString()}) {
            as(${this.alias})
            version(${this.version.toString()})
        }`;
    }
}
