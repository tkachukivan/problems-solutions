// https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node
class NodeStore {
    constructor() {
        this.containerNode = [];
        this.containerValue = [];
    }
    /**
    * @param {Node} node
    * @param {any} value
    */
    set(node, value) {
        const index = this.containerNode.findIndex((n) => n === node);
        if (index === -1) {
            this.containerNode.push(node);
            this.containerValue.push(value);
        } else {
            this.containerValue[index] = value;
        }

        return value;
    }
    /**
     * @param {Node} node
     * @return {any}
     */
    get(node) {
        const index = this.containerNode.findIndex((n) => n === node);
        if (index === -1) return null;
        return this.containerValue[index];
    }

    /**
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
        return this.containerNode.includes(node);
    }
}

class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
    constructor() {
        this.nodes = {};
    }
    set(node, value) {
        node.__nodeStoreKey__ = Symbol();
        this.nodes[node.__nodeStoreKey__] = value;
    }
    /**
     * @param {Node} node
     * @return {any}
     */
    get(node) {
        return this.nodes[node.__nodeStoreKey__];
    }

    /**
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
        return !!this.nodes[node.__nodeStoreKey__];
    }
}