import { CapsuleLocale } from "./CapsuleLocale";
import { DeviceCode } from "./DeviceCode.enum";

export class CapsuleTarget {
    public device: DeviceCode;
    public locale: CapsuleLocale;
    public enabled: boolean;

    constructor(
        device: DeviceCode,
        locale: CapsuleLocale,
        enabled: boolean = true,
    ) {
        this.device = device;
        this.locale = locale;
        this.enabled = enabled;
    }

    public toString(): string {
        return `bixby-${DeviceCode[this.device]}-${this.locale.toString()}`;
    }

    public toBxb(): string {
        return `target(bixby-${DeviceCode[this.device]}` +
                `-${this.locale.toString()})` +
                `${(!(this.enabled) ? "enabled(false)" : "")}`;
    }
}
