Array.prototype.allBefore = function(item) {
    if (!item) {
        throw new Error('allBefore requires 1 argument (item).');
    } else {
        return this.slice(0, this.indexOf(item));
    }
}