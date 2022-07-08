Array.prototype.mapPropsWithout = function(...args) {
    if (!args.length) {
        throw new Error('mapPropsWithout requires at least 1 argument (prop).');
    } else {
        return this.map((item) => {
            const obj = {};

            Object.keys(item).forEach((prop) => {
                if (!args.includes(prop)) {
                    obj[prop] = item[prop]
                }
            });

            return obj;
        });
    }
}