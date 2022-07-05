require('../../prototypes/array/first');

const { expect } = require('chai');

const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

describe('first', () => {
    it('returns first item', () => {
        expect(people.first()).to.deep.equal({ name: 'Chris' });
    });
    
    it('returns undefined if array is empty', () => {
        expect([].first()).to.be.undefined;
    });
});