Array.prototype.mapProps = function(...args) {
    if (!args.length) {
        throw new Error('mapProps requires at least 1 argument (prop).');
    } else {
        return this.map((item) => {
            const obj = {};

            args.forEach(prop => obj[prop] = item[prop]);

            return obj;
        });
    }
}