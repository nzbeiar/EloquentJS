const range = (start,end, step = start < end ? 1 : -1) => {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i+=step)
        {
            arr.push(i);
        }
    }
    else
    {
        for (let i = start; i >= end; i+=step)
        {
            arr.push(i);
        }
    }
    return arr;
}

const sum = (arr) => {
    return arr.reduce((a,b) => a+b);
}

const reverseArray = (arr) => {
    let reversed = [];
    for (let i = arr.length-1; i >= 0; i--)
    {
        reversed.push(arr[i]);
    }
    return reversed;
}

const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor((arr.length) / 2); i++)
    {
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

const arrayToList = (arr) => {
    let obj = null;
    for (let i = arr.length-1; i >= 0; i--)
    {
        obj = {value:arr[i], rest: obj}
    }
    return obj;
}

const arrayToListRecursive = (arr) => {
    let obj = {};
    if (arr.length >= 1)
    {
        obj.value = arr[0];
        obj.rest = arrayToListRecursive(arr.slice(1));
    }
    else if (arr.length  < 1)
    {
        return null;
    }
    return obj;
}

const listToArray = (list) => {
    let arr = []
    for (let val = list;val; val = val.rest)
    {
        arr.push(val.value);
    }
    return arr;
}

const listToArrayRecursive = (list, arr = []) => {
    if (list != null)
    {
        arr.push(list.value);
        return listToArrayRecursive(list.rest,arr);
    }
    return arr;
}

const prepend = (el, list) => {
    return {value:el, rest:list}
}

const nth = (list,n) => {
    let value;
    for (let i = 0; i <=n; i++)
    {
        value = list.value;
        list.rest ? list = list.rest : list = {};
    }
    return value;
}

const nthRecursive = (list,n) => {
    if (!list)
    {
        return undefined;
    }
    else if (n === 0)
    {
        return list.value;
    }
    return nthRecursive(list.rest,n-1);
}

const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2)
    {
        return true;
    }
    if (typeof(obj1) === "object" && typeof (obj2) === "object" && obj1 !== null && obj2 !== null)
    {
        for (let el of Object.keys(obj1))
        {
            if (Object.keys(obj2).includes((el)))
            {
                if (!deepEqual(obj1[el], obj2[el]))
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        return true;
    }
}
let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
 // true