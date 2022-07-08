Array.prototype.oneAfter = function(item) {
    if (!item) {
        throw new Error('oneAfter requires 1 argument (item).');
    } else {
        return this[this.indexOf(item) + 1]
    }
}