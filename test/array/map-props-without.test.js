require('../../prototypes/array/map-props-without');

const { expect } = require('chai');

const people = [
    { id: 1, name: 'Chris', token: 'abc' },
    { id: 2, name: 'Giuliano', token: 'def' },
    { id: 3, name: 'Vu', token: 'ghi' }
];

describe('mapPropsWithout', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.mapPropsWithout()).to.throw('mapPropsWithout requires at least 1 argument (prop).');
        });
    });
    
    describe('success', () => {
        it('returns correct result', () => {
            expect(people.mapPropsWithout('id', 'token')).to.deep.equal([
                { name: 'Chris' },
                { name: 'Giuliano' },
                { name: 'Vu' }
            ]);
        });
    });
});