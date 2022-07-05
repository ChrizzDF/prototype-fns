Array.prototype.findBy = function(...args) {
    if (args.length < 2) {
        throw new Error('findBy requires 2 arguments ("key", "value").');
    } else {
        return this.find(item => item[args[0]] === args[1])
    }
}