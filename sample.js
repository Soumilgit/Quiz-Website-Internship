const myObject = {
    property1: value1,
    property2: value2,
    // More properties
};
function MyClass(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
}

const myObject = new MyClass(value1, value2);


function MyClass(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
}

const myObject1 = new MyClass(value1, value2);
const myObject2 = new MyClass(value3, value4);

const prototypeObject = {
    // Prototype properties and methods
};

const myObject = Object.create(prototypeObject, {
    property1: {
        value: value1,
        writable: true,
        enumerable: true,
        configurable: true
    },
    property2: {
        value: value2,
        writable: true,
        enumerable: true,
        configurable: true
    }
    // More properties if needed
});
'5' == 5 // true, because '5' is coerced to a number before comparison


'5' === 5 // false, because the types are different (string vs. number)
