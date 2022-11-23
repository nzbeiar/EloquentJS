import {run} from "./scope.js";




run(`
do(
    define(ar, array(1,2,3,4,5)),
    define(l,length(ar)),
    print(ar),
    print(l),
    print(element(ar,2)))
`);