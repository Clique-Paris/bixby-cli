import * as fs from "fs";
import * as shell from "shelljs";
import { trainingId } from "../generators/capsule.generator";
import { ActionType } from "../structs/ActionType.enum";
import { PrimitifType } from "../structs/PrimitifType.enum";
import {dialog as dialogHelper, training as trainingHelper}  from "./targets.helper";

function jsCode(): string {
  return `module.exports.function = function (name) {
  return {
    name: name
  }
}`;
}

function action(name: string, type: ActionType): string {
  return `action (${name[0].toUpperCase() + name.slice(1)}) {
    type(${ActionType[type]})
    description (A sample ${name.toLowerCase()} action)
    collect {
      input (name) {
        type (Name)
        min (Required) max (One)
      }
    }
    output (Person)
}`;
}

function primitif(name: string, type: PrimitifType): string {
  return `${PrimitifType[type]} (${name[0].toUpperCase() + name.slice(1)}) {
  description (A sample ${name.toLowerCase()} primitif)
}`;
}

function structure(name: string): string {
  return `structure (${name[0].toUpperCase() + name.slice(1)}) {
  description (A sample ${name.toLowerCase()} structure)
  property (name) {
    type (Name)
    min (Required) max (One)
  }
}`;
}

function view(): string {
  return `result-view {
  match: Person (this) {
    from-output: Hello(action)
  }
  render {
    layout {
      section {
        content {
          thumbnail-card {
            image-background-color (Transparent)
            image-object-fit (Contain)
            image-url("/user.png")
            image-object-position (Center)
            image-position (Start)
            title-area {
              halign (Start)
              slot1  {
                text {
                  value("#{value(this.name)}")
                  style(Title_M)
                }
              }
            }
          }
        }
      }
    }
  }
}`;
}

function endpoints(): string {
  return `endpoints {
  action-endpoints {
    action-endpoint (Hello) {
      accepted-inputs (name)
      local-endpoint (hello.js)
    }
  }
}`;
}

export function capsule_bxb(id: string,targets: string[]): string {
  const targetText = () => {
    return targets.map((target: string) => {
      return `target (bixby-mobile-${target})`;
    }).reduce((a: string, b: string) => {
      return a + "\n" + b;
    }, "");
  };
  return `capsule {
  id (${id})
  version (0.1.0)
  format (3)
  targets {
    ${targetText()}
  }
  runtime-flags {
    concepts-inherit-super-type-features
    modern-prompt-rejection
    support-halt-effect-in-computed-inputs
  }
}`;
}

function dialog(): string {
  return `dialog (Result) {
  match: Person (this) {
    from-output: Hello(action)
  }
  template-macro (Welcome) {
    param (name) {
      expression (this.name)
    }
  }
}`;
}

function templateMacroDef(local: string): string {
  return `template-macro-def (Welcome) {
  params {
    param (name) {
      type (Name)
      min (Required) max (One)
    }
  }
  content {
    template ("${dialogHelper(local)} #{value(name)} 👋")
  }
}`;
}

function training(local: string, name: string) {
  return `train (${trainingId("0")}) {
  utterance ("[g:Hello] ${trainingHelper(local)} (${name})[v:Name]")
  plan ()
  last-modified (${Date.now()})
}`;
}

function capsule_info(name: string, company: string = "__COMPANY_NAME__", iconUrl: string = "https://bixbydevelopers.com/dev/static/bixby2logo.svg"): string {
return `description {
  displayName (${name})
  companyName (${company})
  iconUrl (${iconUrl})
  description ("A sample test capsule")
  websiteUrl (https://example.com/)
  termsUrl (https://example.com/terms-of-use/)
}`;
}

export function createNewCapsule(id: string, targets: string[], username: string): void {
  const capsulePath = process.cwd() + "/" + id;
  shell.mkdir("-p", capsulePath);
  fs.writeFileSync(capsulePath + "/capsule.bxb", capsule_bxb(id, targets), {encoding: "utf8"});
  shell.mkdir("-p", capsulePath + "/assets");
  const assetSourcePath = __dirname.replace(/\/bixby\-cli.*$/g, "/bixby-cli/assets/");
  shell.cp("-f", assetSourcePath + "user.png", capsulePath + "/assets/user.png");
  shell.mkdir("-p", capsulePath + "/code");
  fs.writeFileSync(capsulePath + "/code/hello.js", jsCode(), {encoding: "utf8"});
  shell.mkdir("-p", capsulePath + "/models/action");
  fs.writeFileSync(capsulePath + "/models/action/Hello.model.bxb", action("Hello", ActionType.Search), {encoding: "utf8"});
  shell.mkdir("-p", capsulePath + "/models/concept/primitif");
  fs.writeFileSync(capsulePath + "/models/concept/primitif/Name.model.bxb", primitif("Name", PrimitifType.text), {encoding: "utf8"});
  shell.mkdir("-p", capsulePath + "/models/concept/structure");
  fs.writeFileSync(capsulePath + "/models/concept/structure/Person.model.bxb", structure("Person"), {encoding: "utf8"});
  shell.mkdir("-p", capsulePath + "/resources/base/dialog");
  fs.writeFileSync(capsulePath + "/resources/base/" + id.split(".")[1] + ".endpoints.bxb", endpoints(), {encoding: "utf8"});
  fs.writeFileSync(capsulePath + "/resources/base/dialog/hello.dialog.bxb", dialog(), {encoding: "utf8"});
  shell.mkdir("-p", capsulePath + "/resources/base/view");
  fs.writeFileSync(capsulePath + "/resources/base/view/hello.view.bxb", view(), {encoding: "utf8"});
  targets.map((target) => {
    const targetPath = capsulePath + "/resources/" + target;
    shell.mkdir("-p", targetPath + "/training");
    fs.writeFileSync(targetPath + "/training/t-0.training.bxb", training(target, username), {encoding: "utf8"});
    fs.writeFileSync(targetPath + "/capsule-info.bxb", capsule_info(id.split(".")[1]), {encoding: "utf8"});
    fs.writeFileSync(targetPath + "/nlg-strings.dialog.bxb", templateMacroDef(target), {encoding: "utf8"});
  });
}
