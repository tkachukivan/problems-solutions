/**
 * https://bigfrontend.dev/problem/implement-JSON-stringify
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
    // your code here
    if (data === undefined || typeof data === 'function') return undefined;
    const inStack = new Set();
    
    return toJSON(data);

    function toJSON(data) {
        if (data === null) return 'null';

        const type = typeof data;
        if (type === 'function') return '';
        if (type === 'number' && !Number.isFinite(data)) return 'null';
        if (type === 'number' || type === 'boolean') return data;
        if (type === 'string') return `"${data}"`;
        if (type === 'bigint') {
            throw new Error('big int is not supported');
        }
        if (data instanceof Date) {
            return `"${data.toISOString()}"`
        }
        if (inStack.has(data)) {
            throw new Error('circular reference');
        }
        inStack.add(data);

        let result = ''
        if (Array.isArray(data)) {
            result += '[';
            result += data.map((dataPart) => {
                const type = typeof dataPart;
                if (type === 'function' || type === 'symbol' || dataPart === undefined) {
                    return 'null';
                }
                return toJSON(dataPart);
            }).join(',');
            result += ']';
        } else if (type === 'object') {
            result += '{'
            const entries = Object.entries(data)
            entries.forEach(([key, value], index) => {
                if (typeof value === 'function' || value === undefined) return;
                result += `"${key}":`;
                result += toJSON(value)
                if (index < entries.length - 1) {
                    result += ','
                }
            });

            result += '}'
        }

        inStack.delete(data);
        return result;
    }
}