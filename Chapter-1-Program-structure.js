const triangle = (length) =>
{
    let str = "";
    for (let i = 0; i < length; i++)
    {
        str+="#";
        console.log(str);
    }
}

const FizzBuzz = (number) => {
    for (let i = 1; i <= number; i++)
    {
        let str = "";
        if (i%3 === 0) str += "Fizz";
        if (i%5 === 0) str += "Buzz";
        console.log(str || i);
    }
}

const chessboard = (dimensions) => {
    for (let i = 0; i < dimensions; i++)
    {
        let str = "";
        for (let j = 0; j < dimensions; j++)
        {
            if ((i+j) % 2 === 0)
            {
                str+= " ";
            }
            else {
                str+= "#";
            }
        }
        console.log(str);
    }
}

