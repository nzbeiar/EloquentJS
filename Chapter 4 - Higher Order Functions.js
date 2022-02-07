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

const reducer = (arr, f,start) => {
    let acc = start;
    for (let i = 1; i < arr.length; i++)
    {
        acc = f(acc,el);
    }
    return acc;
}

const flatten = (arr) => {
    return arr.reduce((a,b) => a.concat(b));
}

