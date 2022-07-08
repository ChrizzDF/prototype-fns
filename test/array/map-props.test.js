require('../../prototypes/array/map-props');

const { expect } = require('chai');

const people = [
    { id: 1, name: 'Chris', token: 'abc' },
    { id: 2, name: 'Giuliano', token: 'def' },
    { id: 3, name: 'Vu', token: 'ghi' },
];

describe('mapProps', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.mapProps()).to.throw('mapProps requires at least 1 argument (prop).');
        });
    });
    
    describe('success', () => {
        it('returns correct result', () => {
            expect(people.mapProps('id', 'name')).to.deep.equal([
                { id: 1, name: 'Chris' },
                { id: 2, name: 'Giuliano' },
                { id: 3, name: 'Vu' },
            ]);
        });
    });
});