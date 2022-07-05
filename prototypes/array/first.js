Array.prototype.first = function() {
    if (this.length) {
        return this[0];
    } else {
        return undefined;
    }
}