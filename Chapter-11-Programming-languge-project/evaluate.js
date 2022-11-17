import * as parse from "./parse.js";

const specialForms = Object.create(null);
export function evaluate(expr, scope) {
    if (expr.type == "value") {
        return expr.value;
    } else if (expr.type == "word") {
        if (expr.name in scope) {
            return scope[expr.name];
        } else {
            throw new ReferenceError(
                `Undefined binding: ${expr.name}`);
        }
    } else if (expr.type == "apply") {
        let {operator, args} = expr;
        if (operator.type == "word" &&
            operator.name in specialForms) {
            return specialForms[operator.name](expr.args, scope);
        } else {
            let op = evaluate(operator, scope);
            if (typeof op == "function") {
                return op(...args.map(arg => evaluate(arg, scope)));
            } else {
                throw new TypeError("Applying a non-function.");
            }
        }
    }
}

specialForms.if = (args, scope) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if");
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    } else {
        return evaluate(args[2], scope);
    }
};

specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("Wrong number of args to while");
    }
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope);
    }
// Since undefined does not exist in Egg, we return false,
// for lack of a meaningful result.
    return false;
};