// https://bigfrontend.dev/problem/create-a-browser-history
class BrowserHistory {
    /**
     * @param {string} url
     * if url is set, it means new tab with url
     * otherwise, it is empty new tab
     */
    constructor(url) {
        this.history = [];
        this.entry = url;
        this.currentIndex = -1;
        if (url) {
            this.history.push(url);
            this.currentIndex = 0;
        }
    }
    /**
     * @param { string } url
     */
    visit(url) {
        this.history.splice(this.currentIndex + 1);
        this.history.push(url);
        this.currentIndex++;
    }

    /**
     * @return {string} current url
     */
    get current() {
        return this.currentIndex === -1 ? this.entry : this.history[this.currentIndex];
    }

    // go to previous entry
    goBack() {
        this.currentIndex--;
    }

    // go to next visited url
    forward() {
        if (this.currentIndex < this.history.length - 1) this.currentIndex++;
    }
}
