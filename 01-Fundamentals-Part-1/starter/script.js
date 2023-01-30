// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';
// let first = 'jonas'
// let firstNamePerson


// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let mySecondJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);



// DATA TYPES
//-------------------------------
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991
// console.log(typeof year);

// console.log(typeof null);


// LET, CONST, VAR
//-------------------------------
// let age = 30;
// age = 31;
// console.log(age)
// const birthYear = 1991;
// birthYear = 1990;
// console.log(birthYear)

// const job;

// var job = 'programmer';
// job = 'teacher';
// console.log(job)

// lastName = 'Schmedtmann'
// console.log(lastName)
// always properly declare variables or else your shit will be all fucked up


// BASIC OPERATORS
//-------------------------------
// 1. Mathematical Operators
/*const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

const now = 2037;
const ageMason = now - 1991;
const ageHannah = now - 2018;
console.log(ageMason, ageHannah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3... so 2 * 2 * 2;

// We can use the '+' operator to concatenate strings
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName); //not quite right, the names are merged together
console.log(firstName + ' ' + lastName); // this will give us a space between the two words

// 2. Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x (it's own value) + 10; x = 15 + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// 3. Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);*/


// STRINGS AND TEMPLATE LITERALS
//-------------------------------
/*const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew)
// backticks ` ` can also be used for all strings
// some developers do this for consistency in case they have to go back and insert variables in code

console.log(`Just a regular string...`)

//multi-line strings
console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)*/


// TAKING DECISIONS IF/ELSE STATEMENTS
//-------------------------------
// If we want to write a program which checks whether a person is allowed to start taking a drivers license test or not, if they are it will print to the console, if not it will print how many years are left
/*
const age = 15
const isOldEnough = age >= 18
const yearsLeft = 18 - age
//if(condition to be executed (boolean)) {
//when condition is true, will run this code}

if (isOldEnough) {
  console.log('🚗 Sarah can start driving license test 🚗')
} else {
  console.log(`Sarah is too young. She can start her driving license test in ${yearsLeft} years`)
}

const birthYear = 2012
let century;

if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}

console.log(century)
*/
/* Control Structure:

if () {

} else {

} 

*/


// TYPE CONVERSION AND COERCION
//-------------------------------
// type conversion
/*
const inputYear = '1991'
console.log(Number(inputYear), inputYear) // yilds 1991 '1991'
console.log(inputYear + 18) // yields 199118
console.log(Number(inputYear) + 18)

console.log(Number('Jonas')) // yields NaN
console.log(typeof NaN) // NaN actually means "invalid number"

console.log(String(23), 23) // when the value in the console is white, it signifies a string, purple signifies a number

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old') // same as before
console.log('I am ' + String(23) + ' years old') // for languages that do not have type coercion included in them
console.log('23' - '10' - 3) // js converts strings to numbers
// this means that he minus operator actualy triggers strings to numbers = 10
console.log('23' + '10' + 3) // 3 is converted to a string then the strings are concatenated = 23103
console.log('23' * '2') // converted to numbers; it is the only way the multiplyer operator works = 46
console.log('23' / '2') // same applies to division operator, it converts them to numbers = 11.5

let n = '1' + 1
n = n - 1
console.log(n) // = 10
*/


// TRUTHY $ FALSY VALUES
//-------------------------------
/*
// only 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas')) // any string that is NOT an empty string is a truthy value
console.log(Boolean(''))
console.log(Boolean({}))
// in practice, the conversion to Boolean is always implicit, not explicit (aka type coercion that JS does behind the scenes)

let money = 0
if (money) {
  console.log(`Don't spend it all ;)`)
} else {
  console.log(`You should get a job!`)
}
// we know that 'money' is 0, which is a falsy value. So in this condition, the number 0 will be converted to false implicitly. So as a result, the 'else' block is executed.
money = 1
if (money) {
  console.log(`Don't spend it all ;)`)
} else {
  console.log(`You should get a job!`)
}

let height;
if (height) {
  console.log(`YAY! Height is defined!`)
} else {
  console.log(`Height is UNDEFINED`)
}
// because 'height' is undefined, it will automatically be converted to a boolean --> undefined, which is a falsy value
height = 123;
if (height) {
  console.log(`YAY! Height is defined!`)
} else {
  console.log(`Height is UNDEFINED`)
}
*/


// EQUALITY OPERATORS == vs. ===
//-------------------------------

// = assignment
// == loose assignment, it does type coercion
// === strict assignment, does NOT perform type coercion, must be EXACTLY the same value
/*
let age = 18;
if (age === 18) console.log(`You just became an adult! (strict)`)
if (age == 18) console.log(`You just became an adult! (loose)`)


age = '18';
if (age === 18) console.log(`You just became an adult! (strict)`)
if (age == 18) console.log(`You just became an adult! (loose)`)


let favorite = Number(prompt(`What's your favorite number?`))
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) { 
  console.log(`Cool! 23 is an amazing number!`)
} else if (favorite === 7) {
  console.log(`7 is also a cool number`)
} else if (favorite === 9) {
  console.log(`9 is also a cool number`)
} else {
  console.log(`Number is not 23 or 7 or 9`)
}

if (favorite !== 23) console.log(`Why not 23?`)
// != loose
// !== strict
// the '!' takes the place of the first '='
*/


// LOGICAL OPERATORS
//-------------------------------
/*
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B
// 'and' operator is &&; 'or' operator is ||
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log(`Sarah is able to drive!`)
} else {
  console.log(`Someone else should drive...`)
}

const isTired = false; // variable C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`)
} else {
  console.log(`Someone else should drive...`)
}
*/


// THE SWITCH STATEMENT (alternative if/else statement)
//-------------------------------

const day = 'wednesday';

switch(day) {
  case 'monday': // day === 'monday
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!')
}

const today = true
if (today === 'wednesday' || 'thursday')