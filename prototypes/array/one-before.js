Array.prototype.oneBefore = function(item) {
    if (!item) {
        throw new Error('oneBefore requires 1 argument (item).');
    } else {
        return this[this.indexOf(item) - 1]
    }
}