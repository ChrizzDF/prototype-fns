require('../../prototypes/array/map-by');

const { expect } = require('chai');

const people = [
    { id: 1, name: 'Chris' },
    { id: 2, name: 'Giuliano' },
    { id: 3, name: 'Vu' },
];

describe('mapBy', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.mapBy()).to.throw('mapBy requires a key to map by.');
        });
    });
    
    describe('success', () => {
        it('returns correct result', () => {
            expect(people.mapBy('name')).to.deep.equal(['Chris', 'Giuliano', 'Vu']);
        });
    });
});