const assert = require('assert');
import { GitHubRepo } from '../../src/github/model';

const EMOJI = '🌟';
describe('GitHubRepo', () => {
    describe('startInfo', () => {
        it('should return an empty string for 0 stars', () => {
            //given
            const stars = '✨';
            //const modelToTest = new GitHubRepo({ stars: 0 });
            const modelToTest = new GitHubRepo({ stars });
            //when
            const result = modelToTest.starsInfo;
            //then
            assert.equal(result, '✨');
        });
        it('should return a number of starts with an emoji for a positive stars number', () => {
            //given
            const stars = 777;
            const modelToTest = new GitHubRepo({ stars });
            //when
            const result = modelToTest.starsInfo;
            //then
            assert.equal(result, `(${stars} ${EMOJI})`);
        });
    });
});