class MultiplicatorUnitFailure extends Error {}

const primitiveMultiply = (a, b) => {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

const reliableMultiply = (a, b) => {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure))
                throw e;
        }
    }
}


const box = {
    locked: false,
    unlock() { this.locked = false; },
    lock() { this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

const withBoxUnlocked = (body) => {
    if (box.locked)
    {
        box.unlock();
        try {
            return body();
        } finally {
            box.lock();
        }
    }
    else
    {
        return body();
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
    console.log("Error raised:", e);
}

console.log(box.locked);
// → true