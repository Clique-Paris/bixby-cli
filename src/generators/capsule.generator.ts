export function trainingId(index: string): string {
    return `t-${index}${(Math.random().toString(30).substring(2, 15) + Math.random().toString(29).substring(2, 15))}`;
}
