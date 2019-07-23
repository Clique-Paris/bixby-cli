export enum PermissionName {
    guest_access_allowed,
    lock_screen_enabled,
    user_profile_access,
}

enum PermissionAllow {
    DEFAULT_ENABLED,
    DEFAULT_DISABLED,
    ALWAYS,
    NEVER,
}

export class Permission {
    constructor(
        public value: PermissionName,
        public details: PermissionAllow = PermissionAllow.DEFAULT_DISABLED,
    ) {
        this.value = value;
        this.details = details;
    }

    public toString(): string {
        const permissionName = PermissionName[this.value].replace(/_/g, "-");
        if (this.value !== PermissionName.guest_access_allowed) {
            return `${permissionName}`;
        } else {
            return `${permissionName}(${PermissionAllow[this.details]})`;
        }
    }
}
