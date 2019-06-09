export function training(local: string): string|undefined {
    switch (local) {
        case 'zh-CN':
            return `我叫`;
        case 'en-US':
            return `My name is`;
        case 'en-GB':
            return `My name is`;
        case 'fr-FR':
            return `Je m'appelle`
        case 'de-DE':
            return `ich heiße`;
        case 'es-ES':
            return `mi nombre es`;
        case 'it-IT':
            return `il mio nome è`;
        case 'ko-KR':
            return `내 이름은`;
        default:
            return undefined;
    }
}

export function dialog(local: string): string|undefined {
    switch (local) {
        case 'zh-CN':
            return "你好";
        case 'en-US':
            return "Hello";
        case 'en-GB':
            return "Hello";
        case 'fr-FR':
            return "Bonjour"
        case 'de-DE':
            return "Hallo";
        case 'es-ES':
            return "Hola";
        case 'it-IT':
            return "Ciao";
        case 'ko-KR':
            return "내 이름은";
        default:
            return undefined;
    }
}