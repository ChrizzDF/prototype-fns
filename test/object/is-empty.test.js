require('../../prototypes/object/is-empty');

const { expect } = require('chai');

describe('isEmpty', () => {
    it('returns true if doesn\'t have keys', () => {
        const obj = {};

        expect(obj.isEmpty()).to.be.false;
    });
    
    it('returns false if doesn\'t have keys', () => {
        const obj = { name: 'Chris' };

        expect(obj.isEmpty()).to.be.true;
    });
});