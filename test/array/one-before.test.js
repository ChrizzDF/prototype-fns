require('../../prototypes/array/one-before');

const { expect } = require('chai');

const people = ['Chris', 'Giuliano', 'Vu'];

describe('oneBefore', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.oneBefore()).to.throw('oneBefore requires 1 argument (item).');
        });
    });

    describe('success', () => {
        it('finds the correct item after given one', () => {
            expect(people.oneBefore('Vu')).to.equal('Giuliano');
        });
        
        it('is first item', () => {
            expect(people.oneBefore('Chris')).to.be.undefined;
        });
    });
});