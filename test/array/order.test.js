require('../../prototypes/array/order');

const { expect } = require('chai');

const numbers = [2, 3, 1];
const people = ['Chris', 'Vu', 'Giuliano'];

describe('order', () => {
    it('returns correct asc order (number)', () => {
        expect(numbers.order()).to.deep.equal([
            1, 2, 3
        ]);
    });
    
    it('returns correct desc order (number)', () => {
        expect(numbers.order('desc')).to.deep.equal([
            3, 2, 1
        ]);
    });
    
    it('returns correct asc order (string)', () => {
        expect(people.order()).to.deep.equal([
            'Chris', 'Giuliano', 'Vu'
        ]);
    });
    
    it('returns correct desc order (string)', () => {
        expect(people.order('desc')).to.deep.equal([
            'Vu', 'Giuliano', 'Chris'
        ]);
    });
});