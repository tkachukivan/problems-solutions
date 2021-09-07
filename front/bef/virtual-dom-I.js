/**
 * https://bigfrontend.dev/problem/Virtual-DOM-I
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
function virtualize(element) {
    // your code here
    const node = { type: element.nodeName.toLowerCase(), props: {} };

    if (element.className) {
        node.props.className = element.className;
    }
    if (element.hasAttributes()) {
        for (let attribute of element.attributes) {
            if (attribute.name === 'class') continue;
            node.props[attribute.name] = attribute.value;
        }
    }

    node.props.children = [];

    for (let child of element.childNodes) {
        if (child.nodeType === 1) {
            node.props.children.push(virtualize(child));
        }
        if (child.nodeType === 3) {
            node.props.children.push(child.textContent);
        }
    }

    if (node.props.children.length === 1 && typeof node.props.children[0] === 'string') {
        node.props.children = node.props.children[0];
    }

    return node;
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj) {
    // your code here
    if (typeof obj === 'string') return document.createTextNode(obj);

    const node = document.createElement(obj.type);
    const { children, ...attr } = obj.props;

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

const json = {
    type: 'div',
    props: {
        children: [
            {
                type: 'h1',
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p',
                props: {
                    className: 'paragraph',
                    children: [
                        ' a ',
                        {
                            type: 'button',
                            props: {
                                children: ' button '
                            }
                        },
                        ' from ',
                        {
                            type: 'a',
                            props: {
                                href: 'https://bfe.dev',
                                children: [
                                    {
                                        type: 'b',
                                        props: {
                                            children: 'BFE'
                                        }
                                    },
                                    '.dev'
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}
const html = render(json);
console.log(html);
console.log(virtualize(html))