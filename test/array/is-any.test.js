require('../../prototypes/array/is-any');

const { expect } = require('chai');

const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: true },
    { name: 'Vu', isAdmin: true },
];

describe('filterBy', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.isAny()).to.throw('isAny requires 2 arguments (key, value).');
        });
    });

    describe('success', () => {
        it('finds at least one match', () => {
            expect(people.isAny('isAdmin', false)).to.equal(false);
        });
        
        it('doesn\'t find any match', () => {
            expect(people.isAny('name', 'Chris')).to.equal(true);
        });
    });
});