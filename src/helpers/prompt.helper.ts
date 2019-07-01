import * as inquirer from "inquirer";

export async function selectTargets(targets: string[]): Promise<string[]> {
    const result: {target: string[]} = await inquirer.prompt([
        {
            message: "Please select at least one target for your capsule",
            name: "target",
            type: "checkbox",
            choices: targets,
        },
    ]);
    return Promise.resolve(result.target);
}
