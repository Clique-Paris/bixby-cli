import chalk from "chalk";

export function warning(message: string) {
    // tslint:disable-next-line:no-console
    console.warn(`${chalk.yellow("Warning:")} ${message}`);
}

export function error(message: string) {
    // tslint:disable-next-line:no-console
    console.error(`${chalk.red("Error:")} ${message}`);
}

export function info(message: string) {
    // tslint:disable-next-line:no-console
    console.info(`${chalk.green("Info")} ${message}`);
}

export function success(message: string) {
    // tslint:disable-next-line:no-console
    console.info(`${chalk.green("Success:")} ${message}`);
}
