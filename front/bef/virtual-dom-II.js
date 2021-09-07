/**
 * https://bigfrontend.dev/problem/virtual-dom-II-createElement
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
    // your code here
    return {
        type,
        props: {
            ...props,
            children
        }
    }
}


/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(myElement) {
    // your code here
    // your code here
    if (typeof myElement === 'string') return document.createTextNode(myElement);

    const node = document.createElement(myElement.type);
    const { children, ...attr } = myElement.props;

    for (const [propName, propValue] of Object.entries(attr)) {
        if (propName === 'className') {
            node.className = propValue;
        } else {
            node.setAttribute(propName, propValue);
        }
    }

    const childrenArray = typeof children === 'string' ? [children] : children;

    childrenArray.forEach((child) => {
        node.appendChild(render(child));
    })

    return node;
}

const h = createElement

render(h(
    'div',
    {},
    h('h1', {}, ' this is '),
    h(
        'p',
        { className: 'paragraph' },
        ' a ',
        h('button', {}, ' button '),
        ' from ',
        h('a',
            { href: 'https://bfe.dev' },
            h('b', {}, 'BFE'),
            '.dev')
    )
))