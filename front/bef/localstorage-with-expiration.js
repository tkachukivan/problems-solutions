// https://bigfrontend.dev/problem/localStorage-with-expiration
window.myLocalStorage = {
    timers: new Map(), // may not needed
    getItem(key) {
        // your code here
        return localStorage.getItem(key) || null;
    },

    setItem(key, value, maxAge) {
        // your code here
        if (this.timers.has(key)) {
            clearTimeout(this.timers.get(key));
            this.timers.delete(key);
        }
        if (maxAge !== 0) localStorage.setItem(key, value);
        if (!maxAge) return;
        let timer = setTimeout(() => {
            localStorage.removeItem(key);
            this.timers.delete(key);
        }, maxAge);
        this.timers.set(key, timer);
    },

    removeItem(key) {
        // your code here
        localStorage.removeItem(key);
    },

    clear() {
        // your code here
        localStorage.clear();
    }
}