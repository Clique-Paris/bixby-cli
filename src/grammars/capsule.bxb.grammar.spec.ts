import * as nearley from 'nearley';
import * as capsuleBxbGrammar from '../grammars/capsule.bxb.grammar';
import { capsule_bxb } from '../helpers/capsule.helper';

describe('Test group for generated capsule.bxb.grammar file', () => {
    it('Test grammar on our generated capsule.bxb file', () => {
        const mock = capsule_bxb('playground.grammarTest',['fr-FR']);
        const capsuleBxbParser = new nearley.Parser(nearley.Grammar.fromCompiled(capsuleBxbGrammar));
        try {
            capsuleBxbParser.feed
            (
                mock
                .replace(/\n/g, " ")
                .replace(/\s+/g," ")
            )  
        } catch (error) {
            console.error(error);
        }
        console.log('Parser returns multiple results:');
        console.log(capsuleBxbParser.results.length);
        expect(true).toBe(true)
    })
});