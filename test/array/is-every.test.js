require('../../prototypes/array/is-every');

const { expect } = require('chai');

const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: true },
    { name: 'Vu', isAdmin: true },
];

describe('filterBy', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.isEvery()).to.throw('isAny requires 2 arguments (key, value).');
        });
    });

    describe('success', () => {
        it('matches all', () => {
            expect(people.isEvery('isAdmin', true)).to.equal(true);
        });
        
        it('doesn\'t match all', () => {
            expect(people.isEvery('name', 'Chris')).to.equal(false);
        });
    });
});