require('../../prototypes/array/find-by');

const { expect } = require('chai');

const people = [
    { id: 1, name: 'Chris', isAdmin: true },
    { id: 2, name: 'Giuliano', isAdmin: false },
    { id: 3, name: 'Vu', isAdmin: undefined },
];

describe('filterBy', () => {
    describe('errors', () => {
        it('throws an error if arguments are missing', () => {
            expect(() => people.findBy()).to.throw('findBy requires 2 arguments ("key", "value").');
        });
    });

    describe('success', () => {
        it('returns the correct result', () => {
            expect(people.findBy('name', 'Vu')).to.deep.equal({
                id: 3, name: 'Vu', isAdmin: undefined
            });
        });
    });
});