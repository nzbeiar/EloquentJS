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

//console.log(reliableMultiply(8, 8));

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;},
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

const withBoxUnlocked = (func) => {
    if (box.locked === true) {
        box.unlock();
        try {
            return func(3);
        }
        catch (err)
        {
            console.log("Something went wrong");
        }
        finally {
            box.lock()
        }
    }
    else
    {
        return func(3);
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true