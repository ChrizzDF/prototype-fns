require('../../prototypes/array/one-after');

const { expect } = require('chai');

const people = ['Chris', 'Giuliano', 'Vu'];

describe('oneAfter', () => {
    describe('errors', () => {
        it('throws an error if key is missing', () => {
            expect(() => people.oneAfter()).to.throw('oneAfter requires 1 argument (item).');
        });
    });

    describe('success', () => {
        it('finds the correct item after given one', () => {
            expect(people.oneAfter('Chris')).to.equal('Giuliano');
        });
        
        it('is last item', () => {
            expect(people.oneAfter('Vu')).to.be.undefined;
        });
    });
});