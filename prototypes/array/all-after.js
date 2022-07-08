Array.prototype.allAfter = function(item) {
    if (!item) {
        throw new Error('allAfter requires 1 argument (item).');
    } else {
        return this.slice(this.indexOf(item) + 1, this.length);
    }
}