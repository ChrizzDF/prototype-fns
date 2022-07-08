require('../../prototypes/array/without');

const { expect } = require('chai');

const people = ['Chris', 'Giuliano', 'Vu'];

describe('without', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.without()).to.throw('without requires 1 argument (item).');
        });
    });

    describe('success', () => {
        it('returns all items excluding given one', () => {
            expect(people.without('Giuliano')).to.deep.equal(['Chris', 'Vu']);
        });
        
        it('returns empty array if item not found', () => {
            expect(people.without('Tom')).to.deep.equal(['Chris', 'Giuliano', 'Vu']);
        });
    });
});