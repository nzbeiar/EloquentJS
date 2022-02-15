class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }
    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
    get length(){
        let x = this.x;
        let y = this.y;
        return Math.sqrt(x*x + y*y);
    }
}
class Group {
    constructor(){
        this.group = [];
    }
    add (val){
        if (!this.group.includes(val))
        {
            this.group.push(val);
        }

    }
    has (val) {
        return this.group.includes(val);
    }
    delete (val) {
        this.group = this.group.filter(el => el !== val);
    }
    static from (arr) {
        let newGroup = new Group();
        for (let el of arr)
        {
            newGroup.add(el);
        }
        return newGroup;
    }
}

class groupIterator{
    constructor(group) {
        this.iterableGroup = group;
        this.index = 0;
    }
    next ()
    {
        if (this.index === this.iterableGroup.group.length)
        {
            return {done: true};
        }
        let element = this.iterableGroup.group[this.index];
        this.index++;
        return {value:element, done:false}
    }
}
Group.prototype[Symbol.iterator] = function() {
    return new groupIterator(this);
};
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

// Borrowing a method
// Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
// used as a more robust alternative to the in operator when you want to ignore
// the prototype’s properties. But what if your map needs to include the word
// "hasOwnProperty"? You won’t be able to call that method anymore because
// the object’s own property hides the method value.
//     Can you think of a way to call hasOwnProperty on an object that has its own
// property by that name?

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map,"one"));
// → true
