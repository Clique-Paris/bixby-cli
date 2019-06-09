import * as shell from "shelljs";

export class ShellService {
    private home: string;
    // private platform: string;
    // private tmpdir: string;

    constructor (
        home: string,
        // platform: string,
        // tmpdir: string
    ) {
        this.home = home;
        // this.platform = platform;
        // this.tmpdir = tmpdir;
    }

    public find(fileName: string) {
        const command = `find ${this.home} -name "${fileName}" 2>&1 | grep -v "Permission denied"`;
        const findResult = shell.exec(command,{silent:true});
        return findResult.stdout.split("\n").filter((elem) => !elem.match(/^\s*$/g))
    }

    public info() {
    }
}