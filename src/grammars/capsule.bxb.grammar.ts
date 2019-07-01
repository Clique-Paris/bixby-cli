// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var CAPSULE: any;
declare var SP: any;
declare var LCB: any;
declare var RCB: any;
declare var ID: any;
declare var LP: any;
declare var CAMELCASE_WORD: any;
declare var POINT: any;
declare var RP: any;
declare var VERSION: any;
declare var FORMAT: any;
declare var NUMBER: any;
declare var TARGETS: any;
declare var TARGET: any;
declare var BIXBY: any;
declare var DASH: any;
declare var DEVICE: any;
declare var LANG: any;
declare var RUNTIME_FLAGS: any;
declare var RUNTIME_FLAG: any;


const moo = require("moo");
const tokens = {
    //File specific selectors
    "CAPSULE": /(?:capsule)/,
    "ID": /id/,
    "VERSION": /version/,
    "FORMAT": /format/,
    "TARGETS": /targets/,
    "TARGET": /target/,
    "BIXBY": /bixby/,
    "DEVICE": /mobile/,
    "LANG": /[a-z]{2}\-[A-Z]{2}/,
    "RUNTIME_FLAGS": /runtime\-flags/,
    "RUNTIME_FLAG": /(?:allow\-dialogs\-on\-detail\-pages)|(?:concepts\-inherit\-super\-type\-features)|(?:modern\-prompt\-rejection)|(?:no\-fallback\-to\-result\-collections)|(?:support\-halt\-effect\-in\-computed\-inputs)/,
    //General selectors
    "RCB": /\}/,
    "LCB": /\{/,
    "RP": /\)/,
    "LP": /\(/,
    "SP": /[ \t]+/,
    "NUMBER": /[0-9]+/,
    "CAMELCASE_WORD": /[a-z][a-zA-Z]*/,
    "POINT": /\./,
    "DASH": /\-/
}

const lexer = moo.compile(tokens);


export interface Token { value: any; [key: string]: any };

export interface Lexer {
  reset: (chunk: string, info: any) => void;
  next: () => Token | undefined;
  save: () => any;
  formatError: (token: Token) => string;
  has: (tokenType: string) => boolean
};

export interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any
};

export type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

export var Lexer: Lexer | undefined = lexer;

export var ParserRules: NearleyRule[] = [
    {"name": "main$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "main$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "main$ebnf$2", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "main$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "main$ebnf$3", "symbols": []},
    {"name": "main$ebnf$3$subexpression$1$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "main$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "main$ebnf$3$subexpression$1", "symbols": ["statement", "main$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "main$ebnf$3", "symbols": ["main$ebnf$3", "main$ebnf$3$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "main$ebnf$4", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "main$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "main", "symbols": [(lexer.has("CAPSULE") ? {type: "CAPSULE"} : CAPSULE), "main$ebnf$1", (lexer.has("LCB") ? {type: "LCB"} : LCB), "main$ebnf$2", "main$ebnf$3", "main$ebnf$4", (lexer.has("RCB") ? {type: "RCB"} : RCB)]},
    {"name": "statement$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "statement$ebnf$2", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "statement$ebnf$3", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "statement", "symbols": [(lexer.has("ID") ? {type: "ID"} : ID), "statement$ebnf$1", (lexer.has("LP") ? {type: "LP"} : LP), "statement$ebnf$2", (lexer.has("CAMELCASE_WORD") ? {type: "CAMELCASE_WORD"} : CAMELCASE_WORD), (lexer.has("POINT") ? {type: "POINT"} : POINT), (lexer.has("CAMELCASE_WORD") ? {type: "CAMELCASE_WORD"} : CAMELCASE_WORD), "statement$ebnf$3", (lexer.has("RP") ? {type: "RP"} : RP)]},
    {"name": "statement$ebnf$4", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "statement$ebnf$5", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "statement$ebnf$6", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "statement", "symbols": [(lexer.has("VERSION") ? {type: "VERSION"} : VERSION), "statement$ebnf$4", (lexer.has("LP") ? {type: "LP"} : LP), "statement$ebnf$5", "semantic_version", "statement$ebnf$6", (lexer.has("RP") ? {type: "RP"} : RP)]},
    {"name": "statement$ebnf$7", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "statement$ebnf$8", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "statement$ebnf$9", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "statement$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "statement", "symbols": [(lexer.has("FORMAT") ? {type: "FORMAT"} : FORMAT), "statement$ebnf$7", (lexer.has("LP") ? {type: "LP"} : LP), "statement$ebnf$8", (lexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER), "statement$ebnf$9", (lexer.has("RP") ? {type: "RP"} : RP)]},
    {"name": "statement", "symbols": ["targets"]},
    {"name": "statement", "symbols": ["runtime_flags"]},
    {"name": "semantic_version", "symbols": [(lexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER), (lexer.has("POINT") ? {type: "POINT"} : POINT), (lexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER), (lexer.has("POINT") ? {type: "POINT"} : POINT), (lexer.has("NUMBER") ? {type: "NUMBER"} : NUMBER)]},
    {"name": "targets$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "targets$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "targets$ebnf$2", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "targets$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "targets$ebnf$3$subexpression$1$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "targets$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "targets$ebnf$3$subexpression$1", "symbols": ["target", "targets$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "targets$ebnf$3", "symbols": ["targets$ebnf$3$subexpression$1"]},
    {"name": "targets$ebnf$3$subexpression$2$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "targets$ebnf$3$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "targets$ebnf$3$subexpression$2", "symbols": ["target", "targets$ebnf$3$subexpression$2$ebnf$1"]},
    {"name": "targets$ebnf$3", "symbols": ["targets$ebnf$3", "targets$ebnf$3$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "targets$ebnf$4", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "targets$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "targets", "symbols": [(lexer.has("TARGETS") ? {type: "TARGETS"} : TARGETS), "targets$ebnf$1", (lexer.has("LCB") ? {type: "LCB"} : LCB), "targets$ebnf$2", "targets$ebnf$3", "targets$ebnf$4", (lexer.has("RCB") ? {type: "RCB"} : RCB)]},
    {"name": "target$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "target$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "target$ebnf$2", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "target$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "target$ebnf$3", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "target$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "target", "symbols": [(lexer.has("TARGET") ? {type: "TARGET"} : TARGET), "target$ebnf$1", (lexer.has("LP") ? {type: "LP"} : LP), "target$ebnf$2", (lexer.has("BIXBY") ? {type: "BIXBY"} : BIXBY), (lexer.has("DASH") ? {type: "DASH"} : DASH), (lexer.has("DEVICE") ? {type: "DEVICE"} : DEVICE), (lexer.has("DASH") ? {type: "DASH"} : DASH), (lexer.has("LANG") ? {type: "LANG"} : LANG), "target$ebnf$3", (lexer.has("RP") ? {type: "RP"} : RP)]},
    {"name": "runtime_flags$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "runtime_flags$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "runtime_flags$ebnf$2", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "runtime_flags$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "runtime_flags$ebnf$3$subexpression$1$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "runtime_flags$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "runtime_flags$ebnf$3$subexpression$1", "symbols": ["runtime_flag", "runtime_flags$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "runtime_flags$ebnf$3", "symbols": ["runtime_flags$ebnf$3$subexpression$1"]},
    {"name": "runtime_flags$ebnf$3$subexpression$2$ebnf$1", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "runtime_flags$ebnf$3$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "runtime_flags$ebnf$3$subexpression$2", "symbols": ["runtime_flag", "runtime_flags$ebnf$3$subexpression$2$ebnf$1"]},
    {"name": "runtime_flags$ebnf$3", "symbols": ["runtime_flags$ebnf$3", "runtime_flags$ebnf$3$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "runtime_flags$ebnf$4", "symbols": [(lexer.has("SP") ? {type: "SP"} : SP)], "postprocess": id},
    {"name": "runtime_flags$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "runtime_flags", "symbols": [(lexer.has("RUNTIME_FLAGS") ? {type: "RUNTIME_FLAGS"} : RUNTIME_FLAGS), "runtime_flags$ebnf$1", (lexer.has("LCB") ? {type: "LCB"} : LCB), "runtime_flags$ebnf$2", "runtime_flags$ebnf$3", "runtime_flags$ebnf$4", (lexer.has("RCB") ? {type: "RCB"} : RCB)]},
    {"name": "runtime_flag", "symbols": [(lexer.has("RUNTIME_FLAG") ? {type: "RUNTIME_FLAG"} : RUNTIME_FLAG)]}
];

export var ParserStart: string = "main";
