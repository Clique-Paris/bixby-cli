#! /bin/sh

for grammar_file in `ls ./grammars/*.ne`
do
    nearleyc $grammar_file > src/grammars/`echo $grammar_file | cut -d '/' -f3 | sed s/\.ne//`.grammar.ts
done