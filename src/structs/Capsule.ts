import { CapsuleFormat } from "./CapsuleFormat";
import { CapsuleId } from "./CapsuleId";
import { CapsuleTarget } from "./CapsuleTarget";
import { CustomError } from "./CustomError";
import { ErrorCode } from "./ErrorCode.enum";
import { ImportDependency } from "./ImportDependency";
import { Permission } from "./Permission";
import { RunTimeFlag } from "./RunTimeFlag";
import { SemanticVersion } from "./SemanticVersion";

export class Capsule {
    public id: CapsuleId;
    public description: string;
    public format: CapsuleFormat;
    public version: SemanticVersion;
    public targets: CapsuleTarget[];
    public imports: ImportDependency[]|undefined;
    public permissions: Permission[]|undefined;
    public flags: RunTimeFlag[]|undefined;

    constructor(
        id: CapsuleId,
        description: string,
        format: number = 3,
        version: SemanticVersion,
        targets: CapsuleTarget[],
        imports: ImportDependency[]|undefined,
        permissions: Permission[]|undefined,
        flags: RunTimeFlag[]|undefined,
    ) {
        if (format !== 3) {
            throw new CustomError(
                ErrorCode.invalidFormatValue,
                "InvalidFormat", "Format value is not valid",
                "Capsule",
            );
        }
        this.id = id;
        this.description = description;
        this.format = new CapsuleFormat(format);
        this.version = version;
        this.targets = targets;
        this.imports = imports;
        this.permissions = permissions;
        this.flags = flags;
    }

    public getId(): string {
        return this.id.toString();
    }

    public getDescription(): string {
        return this.description;
    }

    public getVersion(): SemanticVersion {
        return this.version;
    }

    public getTargets(): CapsuleTarget[] {
        return this.targets;
    }

    public getImports(): ImportDependency[]|undefined {
        return this.imports;
    }

    public getPermissions(): Permission[]|undefined {
        return this.permissions;
    }

    public getFlags(): RunTimeFlag[]|undefined {
        return this.flags;
    }
    public toBxb(): string {
        return `
        capsule {
            ${this.id.toBxb()}
            ${this.version.toBxb()}
            ${this.format.toBxb()}
            targets {
                ${this.targets.map((target) => target.toBxb()).join("\n")}
            }
            ${(this.imports !== undefined && this.imports !== null) ?
                `capsule-imports {
                    ${this.imports.map((capsuleImport) => capsuleImport.toBxb()).join("\n")}
                }` : ""
            }
            ${(this.permissions !== undefined && this.permissions !== null) ?
                `permissions {
                    ${this.permissions.map((permission) => permission.toString()).join("\n")}
                }` : ""
            }
            ${(this.flags !== undefined && this.flags !== null) ?
            `runtime-flags {
                ${this.flags.map((flag: RunTimeFlag) => flag.toBxb()).join("\n")}
            }
        }` : ``}`;
    }
}
