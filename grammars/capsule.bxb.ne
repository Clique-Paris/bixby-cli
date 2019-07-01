@preprocessor typescript

@{%

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

%}

# Pass your lexer object using the @lexer option:
@lexer lexer

main -> %CAPSULE %SP:? %LCB %SP:? (statement %SP:?):* %SP:? %RCB

statement -> %ID %SP:? %LP %SP:? %CAMELCASE_WORD %POINT %CAMELCASE_WORD %SP:? %RP
        | %VERSION %SP:? %LP %SP:? semantic_version %SP:? %RP
        | %FORMAT %SP:? %LP %SP:? %NUMBER %SP:? %RP
        | targets
        | runtime_flags

semantic_version -> %NUMBER %POINT %NUMBER %POINT %NUMBER
targets -> %TARGETS %SP:? %LCB %SP:? (target %SP:?):+ %SP:? %RCB
target -> %TARGET %SP:? %LP %SP:? %BIXBY %DASH %DEVICE %DASH %LANG %SP:? %RP
runtime_flags -> %RUNTIME_FLAGS %SP:? %LCB %SP:? (runtime_flag %SP:?):+ %SP:? %RCB
runtime_flag -> %RUNTIME_FLAG