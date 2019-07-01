import * as inquirer from "inquirer";

export async function selectTargets(targets: string[]): Promise<string[]> {
    const result: {target: string[]} = await inquirer.prompt([
        {
            choices: targets,
            message: "Please select at least one target for your capsule",
            name: "target",
            type: "checkbox",
        },
    ]);
    return Promise.resolve(result.target);
}
