Array.prototype.mapBy = function(...args) {
    if (!args.length) {
        throw new Error('mapBy requires a key to map by.');
    } else {
        return this.map(item => item[args[0]]);
    }
}