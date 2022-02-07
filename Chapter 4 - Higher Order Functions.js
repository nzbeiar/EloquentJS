const mapper = (f, arr) => {
    let mapped = [];
    for (let el of arr)
    {
        mapped.push(f(el));
    }
    return mapped;
}

const filter = (f, arr) => {
    let filtered = [];
    for (let el of arr)
    {
        if (f(el))
        {
            filtered.push(el);
        }
    }
    return filtered;
}

const reducer = (arr, f) => {
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        acc = f(acc,arr[i]);
    }
    return acc;
}

const flatten = (arr) => {
    return arr.reduce((a,b) => a.concat(b));
}

