Array.prototype.isEvery = function(...args) {
    if (args.length < 2) {
        throw new Error('isAny requires 2 arguments (key, value).');
    } else {
        return this.every(item => item[args[0]] === args[1])
    }
}