let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Others = [ ];
for (let i = 1; i <= 200; i++) {
if (i % 3 === 0 && i % 5 === 0) {
// do something
FizzBuzz.push('FizzBuzz')
} else if (i % 3 === 0) {
Fizz.push('Fizz')
// do something
} else if (i % 5 === 0) {
Buzz.push('Buzz')
// do something
} else {
Others.push('Others')
// do something
}

console.log("Total Number of Fizz = " + Fizz.length);
console.log("Total Number of Buzz = " + Buzz.length);
console.log("Total Number of FizzBuzz = " + FizzBuzz.length);
console.log("Total Number of Other = " + Others.length);
}