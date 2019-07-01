#!/usr/bin/env node

import chalk from "chalk";
import minimist from "minimist";
import { error, success } from "./helpers/logger.helper";
import { CommandService } from "./services/command.service";
import { Package } from "./structs/Package";

const args = minimist(
    process.argv.slice(2),
    {
        alias: {
            h: "help",
            v: "version",
            // A: 'all'
        },
        boolean: [
            "help",
            "version",
            // 'all'
        ],
    },
);

if (args.help) {
        // tslint:disable-next-line:no-console
        console.info("Available commands:");
        // tslint:disable-next-line:no-console
        console.info(`\t${chalk.blue("new")} Creates a new workspace and an initial Bixby capsule`);
        process.exit(1);
    }
if (args.version) {
        // tslint:disable-next-line:no-console
        console.log(new Package().version);
        process.exit(1);
    }

const command = new CommandService(args._);
command.run().then((message: string) => {
        success(message);
    }).catch((reason: string) => {
        error(reason);
    });
