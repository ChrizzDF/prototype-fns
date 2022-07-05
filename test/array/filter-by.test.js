require('../../prototypes/array/filter-by');

const { expect } = require('chai');

const people = [
    { id: 1, name: 'Chris', isAdmin: true },
    { id: 2, name: 'Giuliano', isAdmin: false },
    { id: 3, name: 'Vu', isAdmin: undefined },
];

describe('filterBy', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.filterBy()).to.throw('filterBy requires 2 arguments (key, value).');
        });
    });

    describe('success', () => {
        it('string', () => {
            expect(people.filterBy('name', 'Chris')).to.deep.equal([people[0]]);
        });

        it('true', () => {
            expect(people.filterBy('isAdmin', true)).to.deep.equal([people[0]]);
        });

        it('false', () => {
            expect(people.filterBy('isAdmin', false)).to.deep.equal([people[1]]);
        });

        it('undefined', () => {
            expect(people.filterBy('isAdmin', undefined)).to.deep.equal([people[2]]);
        });

        it('key not existing', () => {
            expect(people.filterBy('missing-prop', 'Tom')).to.deep.equal([]);
        });
        
        it('no match', () => {
            expect(people.filterBy('name', 'Tom')).to.deep.equal([]);
        });
    });
});