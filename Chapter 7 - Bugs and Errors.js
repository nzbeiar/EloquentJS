class MultiplicatorUnitFailure extends Error {}

const primitiveMultiply = (a,b) => {
    let cases = Math.random();
    if (cases < 0.2)
    {
        return a * b;
    }
    else
    {
        throw new MultiplicatorUnitFailure("No luck, mate!");
    }
}

const reliableMultiply = (a,b) => {
    while(true)
    {
        try {
            return primitiveMultiply(a,b);
        }
        catch (err) {
            if (!err instanceof MultiplicatorUnitFailure) {
                throw err;
            }
        }
    }

}

console.log(reliableMultiply(8, 8));