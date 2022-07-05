require('../../prototypes/array/order-by');

const { expect } = require('chai');

const people = [
    { id: 2, name: 'Chris' },
    { id: 3, name: 'Vu' },
    { id: 1, name: 'Giuliano' }
];

describe('orderBy', () => {
    describe('errors', () => {
        it('throws an error if arguments are missing', () => {
            expect(() => people.orderBy()).to.throw('orderBy requires one argument (key).');
        });
    });

    describe('success', () => {
        it('returns default correct asc order (number)', () => {
            expect(people.orderBy('id')).to.deep.equal([
                { id: 1, name: 'Giuliano' },
                { id: 2, name: 'Chris' },
                { id: 3, name: 'Vu' }
            ]);
        });
        
        it('returns default correct asc order (number)', () => {
            expect(people.orderBy('id', 'asc')).to.deep.equal([
                { id: 1, name: 'Giuliano' },
                { id: 2, name: 'Chris' },
                { id: 3, name: 'Vu' }
            ]);
        });
        
        it('returns correct desc order (number)', () => {
            expect(people.orderBy('id', 'desc')).to.deep.equal([
                { id: 3, name: 'Vu' },
                { id: 2, name: 'Chris' },
                { id: 1, name: 'Giuliano' }
            ]);
        });

        it('returns correct asc order (string)', () => {
            expect(people.orderBy('name')).to.deep.equal([
                { id: 2, name: 'Chris' },
                { id: 1, name: 'Giuliano' },
                { id: 3, name: 'Vu' }
            ]);
        });

        it('returns correct desc order (string)', () => {
            expect(people.orderBy('name', 'desc')).to.deep.equal([
                { id: 3, name: 'Vu' },
                { id: 1, name: 'Giuliano' },
                { id: 2, name: 'Chris' }
            ]);
        });
    });
});