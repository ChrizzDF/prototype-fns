require('../../prototypes/array/last');

const { expect } = require('chai');

const people = [
    { id: 1, name: 'Chris', isAdmin: true },
    { id: 2, name: 'Giuliano', isAdmin: false },
    { id: 3, name: 'Vu', isAdmin: undefined },
];

describe('lastItem', () => {
    describe('success', () => {
        it('returns last item', () => {
            expect(people.last()).to.deep.equal({
                id: 3, name: 'Vu', isAdmin: undefined
            });
        });
        
        it('returns no item if array is empty', () => {
            expect([].last()).to.be.undefined;
        });
    });
});