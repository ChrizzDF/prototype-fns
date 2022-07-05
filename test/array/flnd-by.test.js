require('../../prototypes/array/find-by');

const { expect } = require('chai');

const people = [
    { name: 'Chris', isAdmin: true },
    { name: 'Giuliano', isAdmin: false },
    { name: 'Vu', isAdmin: undefined },
];

describe('filterBy', () => {
    describe('errors', () => {
        it('throws an error if arguments are missing', () => {
            expect(() => people.findBy()).to.throw('findBy requires 2 arguments ("key", "value").');
        });
    });

    describe('success', () => {
        it('returns correct item', () => {
            expect(people.findBy('isAdmin', false)).to.deep.equal({
                name: 'Giuliano', isAdmin: false
            });
        });
        
        it('returns undefined if no match', () => {
            expect(people.findBy('name', 'Tom')).to.be.undefined;
        });
    });
});