const min = (arg1,arg2) => {
    if (arg1 < arg2) {
        return arg1;
    }
    else
    {
        return arg2;
    }
}

const isEven = (number) => {
    if (number < 0)
    {
        number = -number;
    }
    if (number === 0)
    {
        return "the number is even";
    }
    else if (number === 1)
    {
        return "the number is odd";
    }
    else
    {
        return isEven(number-2);
    }
}

const countBs = (str) => {
   return countChar(str, 'B');
}

const countChar = (str, chr) => {
    let counter = 0;
    for (let el of str)
    {
        if (el === chr)
        {
            counter ++;
        }
    }
    return counter;
}

const findSequence = (number) => {
    const find = (current,history) => {
        if (current > number)
        {
            return null;
        }
        else if (current === number)
        {
            return history;
        }
        else
        {
           return find(current+5, `(${history} + 5)`) || find(current*3,`(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSequence(11));