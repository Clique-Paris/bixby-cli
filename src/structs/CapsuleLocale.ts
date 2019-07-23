export class CapsuleLocale {
    constructor(
        public mainLanguageCode: string,
        public subLanguageCode: string,
    ) {
        this.mainLanguageCode = mainLanguageCode;
        this.subLanguageCode = subLanguageCode;
    }

    public toString(): string {
        return `${this.mainLanguageCode.toLowerCase().trim()}-${this.subLanguageCode.toUpperCase().trim()}`;
    }
}
