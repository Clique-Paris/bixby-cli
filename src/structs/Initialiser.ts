// import * as os from "os";
// import { ShellService } from "../services/shell.service";
// import * as path from 'path';
// import { ParsedPath } from "path";
// import { ConfigService } from "../services/config.service";
// import * as inquirer from "inquirer";

// export class Initialiser {
//     private shell: ShellService;
//     private capsules: ParsedPath[];
//     private configservice: ConfigService;

//     constructor() {
//         this.shell = new ShellService(os.homedir(),os.platform(),os.tmpdir());
//         this.capsules = [];
//         this.configservice = new ConfigService();
//     }
//     public async init () {
//         this.capsules = this.shell.find("capsule.bxb").concat(this.shell.find("capsule.6t")).map((capsule) => path.parse(capsule))
//         this.configservice.set("capsules.path",this.capsules);
//         this.configservice.set("capsules.default",await this.prompter());
//         console.log(this.configservice.get("capsules"));
//     }
//     private async prompter() {
//         const answers: {"default_capsule_root": string} = await inquirer.prompt([
//             {
//                 message: "What's your default capsules root?",
//                 type: "input",
//                 name: "default_capsule_root",
//                 validate: (input: string) => {
//                     input = input.replace(/(~)|($HOME)/g,os.homedir()).trim();
//                     return input.indexOf(os.homedir()) === 0;
//                 }
//             }
//         ]);
//         return answers.default_capsule_root.replace(/(~)|($HOME)/g,os.homedir()).trim();
//     }
// }