Array.prototype.orderBy = function(...args) {
    if (!args.length) {
        throw new Error('orderBy requires one argument (key).');
    } else {
        const result = this.sort((a, b) => {
            if (typeof a[args[0]] === 'string' ) {
                return a[args[0]].localeCompare(b[args[0]]);
            } else {
                return a[args[0]] - b[args[0]];
            }
        });

        return {
            asc: () => result,
            desc: () => result.reverse()
        }[args[1] || 'asc']();
    }
}