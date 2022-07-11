Array.prototype.sumBy = function(key) {
    if (!key) {
        throw new Error('sumBy requires 1 argument (key).');
    } else {
        return this.reduce((prev, curr) => prev + curr[key], 0);
    }
}