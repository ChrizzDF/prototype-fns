Array.prototype.lastItem = function() {
    if (this.length) {
        return this[this.length - 1];
    } else {
        return undefined;
    }
}