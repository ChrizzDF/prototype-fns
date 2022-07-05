Array.prototype.order = function(...args) {
    const result = this.sort((a, b) => {
        if (typeof a === 'string' ) {
            return a.localeCompare(b);
        } else {
            return a - b;
        }
    });

    return {
        asc: () => result,
        desc: () => result.reverse()
    }[args[0] || 'asc']();
}