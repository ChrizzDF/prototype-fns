require('../../prototypes/array/last');

const { expect } = require('chai');

const people = [
    { name: 'Chris' },
    { name: 'Giuliano' },
    { name: 'Vu' }
];

describe('last', () => {
    describe('success', () => {
        it('returns last item', () => {
            expect(people.last()).to.deep.equal({ name: 'Vu' });
        });
        
        it('returns no item if array is empty', () => {
            expect([].last()).to.be.undefined;
        });
    });
});