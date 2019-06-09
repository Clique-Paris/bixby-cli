import chalk from "chalk";

export function warning(message: string) {
    console.warn(`${chalk.yellow("Warning:")} ${message}`);
}

export function error(message: string) {
    console.error(`${chalk.red("Error:")} ${message}`);
}

export function info(message:string) {
    console.info(`${chalk.green("Info")} ${message}`);
}