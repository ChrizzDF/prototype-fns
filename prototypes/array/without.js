Array.prototype.without = function(item) {
    if (!item) {
        throw new Error('without requires 1 argument (item).');
    } else {
        return this.filter(arrItem => arrItem !== item);
    }
}