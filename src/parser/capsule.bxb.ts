import * as nearley from 'nearley';
import * as capsuleBxbGrammar from '../grammars/capsule.bxb.grammar';

const capsuleBxbParser = new nearley.Parser(nearley.Grammar.fromCompiled(capsuleBxbGrammar));

capsuleBxbParser.feed('capsule');
console.log(capsuleBxbParser.results)
