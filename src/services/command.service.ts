import { get } from "../helpers/https.helper";
import { selectTargets } from "../helpers/prompt.helper"
import { info } from "../helpers/logger.helper";
import { createNewCapsule } from "../helpers/capsule.helper";
import * as os from "os";

export class CommandService {
    private commands: string[];
    // private initialiser: Initialiser;

    constructor(args: string[]) {
        this.commands = args;
        // this.initialiser = new Initialiser();
    }
    
    public async run() {
        switch (this.commands[0]) {
            case "generate":
                console.log("Generator should be called");
                console.log("Module type to generate");
                console.log(this.commands[1]);
                console.log("Module type to generate if necessary or the module name to generate");
                console.log(this.commands[2]);
                console.log("Module name to generate or undefined");
                console.log(this.commands[3]);
                this.generate(this.commands[1],this.commands[2],this.commands[3]);
                break;
            // case "add":
            //     console.log("Adder mut be called");
            //     break;
            // case "delete":
            //     console.log("Deleter must be called");
            //     break;
            // case "clone":
            //     console.log("Cloner must be called");
            //     break;
            // case "sync":
            //     console.log("Syncroniser must be called");
            //     break;
            // case "extract":
            //     console.log("Extractor must be called");
            //     break;
            // case "update":
            //     console.log("Updater must be called");
            //     break;
            // case "build":
            //     console.log("Builder must be called");
            //     break;
            case "new":
                await this.newProject(this.commands[1],this.commands.slice(2));
                break;
            // case "init":
            //     console.log("Initialiser must be called");
            //     //TODO: For intstance we will not use init command
            //     // this.initialiser.init();
            //     break;
            default:
                console.log("This command is not yet defined.");
                break;
        } 
    }

    private async newProject(name: string, targets: string[]) {
        if (name.match(/\w+\.\w+/g) === null) {
            name = "playground."+name.toLowerCase();
            info("Capsule name does not contains a namespace. It'll initialised as a playground capsule");
        }
        var selectedTargets: string[] = targets
        if (targets.length === 0 || targets === undefined || targets === null) {
           selectedTargets = await selectTargets(await this.getTargets());
        }
        this.createProjectFiles(name,selectedTargets);
        
    }

    private createProjectFiles(name: string,targets: string[]) {
        const username = os.userInfo().username; 
        createNewCapsule(name,targets,username);
    }

    private generate(module: string, type: string, name: string) {
        console.log(`${module} module of type ${type} will be created with the name ${name}`);
    }

    private async getTargets(): Promise<string[]> {
        var $ = await get("https://bixbydevelopers.com/dev/docs/reference/type/capsule.targets.target");
        return Promise.resolve(
            $("table").html().match(/<code>[a-z]{2}\-[A-Z]{2}<\/code>/g).map((target: string) => {
                var result = target.match(/[a-z]{2}\-[A-Z]{2}/) || [];
                return result[0];
            })
        );
    }
}