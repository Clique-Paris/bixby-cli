import { Changelog } from "./Changelog";
import { VersionNumber } from "./VersionNumber";

export class SemanticVersion {
    private major: VersionNumber;
    private minor: VersionNumber;
    private patch: VersionNumber;
    private changelog: Changelog | undefined;

    constructor(
        versionNumber?: string,
        major?: number,
        minor?: number,
        patch?: number,
        changelog?: Changelog,
    ) {
        if (
            (typeof versionNumber !== "undefined") &&
            (versionNumber !== undefined) &&
            (versionNumber !== null)
        ) {
            const parsedVersion = versionNumber.match(/([0-9]+)\.([0-9]+)\.([0-9]+)/i);
            if (
                (parsedVersion !== undefined) &&
                (parsedVersion !== null) &&
                (parsedVersion[1] !== undefined) &&
                (parsedVersion[1] !== null) &&
                (parsedVersion[2] !== undefined) &&
                (parsedVersion[2] !== null) &&
                (parsedVersion[3] !== undefined) &&
                (parsedVersion[3] !== null)
            ) {
                this.major = new VersionNumber(Number(parsedVersion[1]));
                this.minor = new VersionNumber(Number(parsedVersion[2]));
                this.patch = new VersionNumber(Number(parsedVersion[3]));
            } else {
                [this.major, this.minor, this.patch] = [
                                                            new VersionNumber(0),
                                                            new VersionNumber(0),
                                                            new VersionNumber(1),
                                                        ];
            }
        } else {
            if (major !== undefined && major !== null) {
                major = 0;
            }
            if (minor !== undefined && minor !== null) {
                minor = 0;
            }
            if (patch !== undefined && patch !== null) {
                patch = 0;
            }
            this.major = new VersionNumber(major as number);
            this.minor = new VersionNumber(minor as number);
            this.patch = new VersionNumber(patch as number);
        }
        this.changelog = changelog;
    }

    public patchUpdate(changelog: Changelog, patch?: number) {
        this.patch.update(patch);
        this.changelog = changelog;
    }

    public minorUpdate(changelog: Changelog, minor?: number) {
        this.minor.update(minor);
        this.changelog = changelog;
    }

    public majorUpdate(changelog: Changelog, major?: number) {
        this.major.update(major);
        this.changelog = changelog;
    }

    set updateChangelog(changelog: Changelog) {
        this.changelog = changelog;
    }

    get getVersionChanges(): Changelog|undefined {
        return this.changelog;
    }

    public toString(): string {
        return `${this.major.valueOf()}.${this.minor.valueOf()}.${this.patch.valueOf()}`;
    }

    public toBxb(): string {
        return `version (${this.major.valueOf()}.${this.minor.valueOf()}.${this.patch.valueOf()})`;
    }
}
