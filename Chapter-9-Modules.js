function uniteUnique(...args) {
    return args
        .reduce((arr1,arr2) =>
        {
           return arr1
               .filter((el, index) => arr1.indexOf(el) === index)
               .concat(arr2.filter(el => !arr1.includes(el)));
        });
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

