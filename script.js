//(1) Make a function that converts m to km

function convertor(m) {
    return (m * 0.001).toFixed(2);
}

console.log(`1000 meters = ${convertor(1000)} km`);


//(2) Rewrite the above as an arrow function

const arrowConvertor = (m) => {
    return (m * 0.001).toFixed(2);
}

console.log(`1613841.93424 meters = ${arrowConvertor(1613841.93424)} km`);


/* (3)
 * Write two functions. 
 * One returns the sum of two numbers, and the other prints to the console the result. 
 * Write the functions in a way to exemplify hoisting.
 */

(function () {
    console.log(`2 + 3 = ${sum(2, 3)}`);
})()

function sum(a, b) {
    return a + b;
}

/* (4)
 * You have the following example:
 *
 *   function operation(arg) {
 *        return arg + 10;
 *    }
 *
 *    function getVal(arg) {
 *        return this.operation(arg);
 *    }
 *
 *    console.log(getVal(10));
 *
 * Make an object that has a getVal function that makes use of this.operation and returns arg - 10
 */

const obj = {
    operation: function (arg) {
        return arg - 10;
    },
    getVal: function (arg) {
        return this.operation(arg);
    },
};

console.log(obj.getVal(10));

/* (5)
 * Make a function that converts an array of numbers to an array of the text representation.
 * E.g. [2, 0, 4, 6] -> [‘two’, ‘zero’, ‘four’, ‘six’]
 */

const arrayConvertor = (arr) => {
    const textRepresentations = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const convertedArr = arr.map(nr => textRepresentations[nr]);

    return convertedArr;
}

console.log(`[2, 0, 4, 6] -> [${arrayConvertor([2, 0, 4, 6])}]`);

/* (6)
 * Similar to the previous problem make a function that transforms a number to the text representation
 * E.g. input: 2022 output: two zero two two
 * Input: 1984 output: one nine eight four
 */

function numberConvertor(n) {
    const arr = n.toString(10).split('').map(Number);

    console.log(`${n} -> ${arrayConvertor(arr).join(' ')}`);
}

numberConvertor(2022);
numberConvertor(1984);