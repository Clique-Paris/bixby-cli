import { IChanges } from "./../interfaces/IChanges.interface";
import { SemanticVersion } from "./SemanticVersion";
export class Changelog {
    private version: SemanticVersion;
    private date: Date;
    private changes: IChanges;
    private priority: "patch" | "major" | "minor";
    private released: boolean = true;

    constructor(
        version: SemanticVersion,
        date: Date = new Date(),
        changes: IChanges,
        priority: "patch" | "major" | "minor",
        isReleased: boolean = true,
    ) {
        this.version = version;
        if (date !== undefined && date !== null) {
            this.date = date;
        } else {
            this.date = new Date();
        }
        this.changes = changes;
        this.priority = priority;
        this.released = isReleased;
    }

    get getVersion(): SemanticVersion {
        return this.version;
    }
    get getDate(): Date {
        return this.date;
    }
    get getChanges(): IChanges {
        return this.changes;
    }
    get getPriority(): 1|2|3 {
        switch (this.priority) {
            case "minor":
                return 2;
            case "major":
                return 3;
            default:
                return 1;
                break;
        }
    }

    get isReleased(): boolean {
        return this.released;
    }
}
