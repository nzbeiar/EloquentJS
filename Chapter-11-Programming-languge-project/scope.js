import {parse} from "./parse.js";
import {evaluate} from "./evaluate.js";

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;


for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
    topScope[op] = Function("a, b", `return a ${op} b;`);
}

topScope.print = value => {
    console.log(value);
    return value;
};

export function run(program) {
    return evaluate(parse(program), Object.create(topScope));
}

// Add support for arrays to Egg by adding the following three functions to the
// top scope: array(...values) to construct an array containing the argument
// values, length(array) to get an array’s length, and element(array, n) to fetch
// the nth element from an array.

topScope.array = (...values) => {
    return values;
}

topScope.length = (arr) => {
    if (!arr instanceof Array) {
        console.log("Not an array");
    } else {
        return arr.length;
    }
}

topScope.element = (arr, index) => {
    if (!arr instanceof Array) {
        console.log("Not an array");
    } else {
        return arr[index];
    }
}

