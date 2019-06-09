#!/usr/bin/env node

import minimist from "minimist";
import { Package } from "./structs/Package";
import { CommandService } from "./services/command.service";

const args = minimist(
    process.argv.slice(2),
    {
        boolean: [
            'help',
            'version',
            // 'all'
        ],
        alias: {
            h: 'help',
            v: 'version',
            // A: 'all'
        }
    }
    );
    
    if (args.help) {
        console.log("Help page called");
    }
    if (args.version) {
        console.log(new Package().version);
        process.exit(1);
    }
    
    const command = new CommandService(args._);
    command.run().then(() => {
        console.log("Done");
    });    
    
    
    // var args = minimist(process.argv.slice(2), {
    //     string: [ 'lang' ],
    //     boolean: [ 'pager' ],
    //     alias: { h: 'help', v: 'version' },
    //     default: { lang: 'en' },
    //     '--': true,
    //     stopEarly: true, /* populate _ with first non-option */
    //     unknown: function () { ... } /* invoked on unknown param */
    //   })