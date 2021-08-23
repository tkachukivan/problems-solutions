
/**
 * https://bigfrontend.dev/problem/implement-a-simple-DOM-wrapper-to-support-method-chaining-like-jQuery
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    return {
        css(property, value) {
            el.style[property] = value;
            return this;
        }
    }
}