// https://bigfrontend.dev/problem/write-your-own-extends-in-es5
const myExtends = (SuperType, SubType) => {
    function ExtendType(...args) {
        /**
         * About this:
         * When call a function, there will be a this pointer in the function
         * If call with new, js will create a new object, and let 'this' point to that object
         * If call without new, this point to whoever called this function
         */

        // use SuperType and SubType constructor to init this.
        SuperType.call(this, ...args);
        SubType.call(this, ...args);

        // build the prototype chain connection, let current this's constructor's prototype point to SubType.prototype
        Object.setPrototypeOf(this, SubType.prototype);
        // this.__proto__ = SubType.prototype;
    }

    // link SubType's prototype chain to SuperType's prototype
    Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
    // SubType.prototype.__proto__ = SuperType.prototype;

    // link ExtendType's prototype chain to SubType's prototype
    Object.setPrototypeOf(ExtendType.prototype, SubType.prototype);
    // ExtendType.prototype.__proto__ = SubType.prototype;

    // link ExtendType's prototype chain to SubType
    // In this case, when we trying to find the static function on ExtendType, we can also find SuperType
    Object.setPrototypeOf(ExtendType, SuperType);
    // ExtendType.__proto__ = SuperType

    return ExtendType;
}

const myExtends = (SuperType, SubType) => {
    function Child(...args) {
        SuperType.apply(this, args);
        SubType.apply(this, args);

        // Important to make ALL instances directly from SubType
        // instanceChild.__proto__ === Student.prototype
        this.__proto__ = SubType.prototype;

    }

    // instanceChild.__proto__.__proto__ === Person.prototype
    SubType.prototype.__proto__ = SuperType.prototype;

    // This is ONLY on static method Child, NO affects on instances
    // NOT needed on creating instances
    // Child.prototype = Object.create(SubType.prototype);

    // For test case: ExtendedType.prototype should be SuperType 
    // NOT needed on creating instances
    Child.__proto__ = SuperType;

    return Child;
}