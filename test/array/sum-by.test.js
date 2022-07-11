require('../../prototypes/array/sum-by');

const { expect } = require('chai');

const people = [
    { name: 'Chris', score: 1 },
    { name: 'Giuliano', score: 2 },
    { name: 'Vu', score: 3 }
];

describe('sumBy', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.sumBy()).to.throw('sumBy requires 1 argument (key).');
        });
    });

    describe('success', () => {
        it('returns correct sum', () => {
            expect(people.sumBy('score')).to.equal(6);
        });
    });
});