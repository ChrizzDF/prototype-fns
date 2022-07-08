require('../../prototypes/array/all-after');

const { expect } = require('chai');

const people = ['Chris', 'Giuliano', 'Vu'];

describe('allAfter', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.allAfter()).to.throw('allAfter requires 1 argument (item).');
        });
    });

    describe('success', () => {
        it('returns all items after given one', () => {
            expect(people.allAfter('Chris')).to.deep.equal(['Giuliano', 'Vu']);
        });
        
        it('returns empty array if is last item', () => {
            expect(people.allAfter('Vu')).to.deep.equal([]);
        });
    });
});