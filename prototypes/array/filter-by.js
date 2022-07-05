Array.prototype.filterBy = function(...args) {
    if (args.length < 2) {
        throw new Error('filterBy requires 2 arguments (key, value).');
    } else {
        return this.filter(item => item[args[0]] === args[1])
    }
}