// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;

const sum = (x, y) => x + y;

const give550 = () => 550;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result = doMath(7, 5);
const result2 = give550();

console.log(result);