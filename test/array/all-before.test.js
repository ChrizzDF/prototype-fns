require('../../prototypes/array/all-before');

const { expect } = require('chai');

const people = ['Chris', 'Giuliano', 'Vu'];

describe('allAfter', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.allBefore()).to.throw('allBefore requires 1 argument (item).');
        });
    });

    describe('success', () => {
        it('returns all items before given one', () => {
            expect(people.allBefore('Vu')).to.deep.equal(['Chris', 'Giuliano']);
        });
        
        it('returns empty array if is first item', () => {
            expect(people.allBefore('Chris')).to.deep.equal([]);
        });
    });
});