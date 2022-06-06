console.log(verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]));

console.log(verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]));

console.log(verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]));

console.log(verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]));

console.log(verify(/\s[.,:;]/, ["bad punctuation ."], ["escape the period"]));

console.log(verify(/\w{6,}/, ["Siebentausenddreihundertzweiundzwanzig"], ["no", "three small words"]));

console.log(verify(/\b[^e\s]+\b/i, ["red platypus", "wobbling nest"], ["earth bed", "learning ape", "BEET"]));


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
          console.log(`Unexpected match for '${str}'`);
    }
}


let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
//console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."

// Numbers again
// Write an expression that matches only JavaScript-style numbers. It must sup-
// port an optional minus or plus sign in front of the number, the decimal dot,
//     and exponent notation—5e-3 or 1E10—again with an optional sign in front of
// the exponent. Also note that it is not necessary for there to be digits in front
// of or after the dot, but the number cannot be a dot alone. That is, .5 and 5.
// are valid JavaScript numbers, but a lone dot isn’t.


// Fill in this regular expression
let number = /(^[+-.]?(\d([Ee](?=[+-]))?)?\d$)|((^\d\.?)(\d+)?$)|(^\d[Ee.][+-]\d+$)|(^\d\.\d[Ee]\d$)/;


// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
    "1.3E2", "1E-4", "1e+12"]) {
    if (!number.test(str)) {
        console.log(`Failed to match '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
    ".5.", "1f5", "."]) {
    if (number.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}