// CODING CHALLENGE # 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😁 */
//const bmi = mass / height ** 2;
/*
let markHeight1 = 1.69
let markWeight1 = 78
let markBMI1 = markWeight1 / markHeight1 ** 2;
console.log(markBMI1)

let johnHeight1 = 1.95
let johnWeight1 = 92
let johnBMI1 = johnWeight1 / johnHeight1 ** 2;
console.log(johnBMI1)

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1)

let markHeight = 1.88
let markWeight = 95
let markBMI = markWeight / markHeight ** 2;
console.log(markBMI)

let johnHeight = 1.76
let johnWeight = 85
let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI)

const markHigherBMI2 = markBMI > johnBMI;
console.log(markHigherBMI2)

// CODING CHALLENGE # 1 SOLUTION
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI)
*/

// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 

GOOD LUCK! 😁 */ 
/*
let BMItemplate;
if (markHigherBMI1) {
  BMItemplate = `Mark's BMI of ${markBMI1} is higher than John's BMI of ${johnBMI1}`
} else {
 BMItemplate = `Mark's BMI of ${markBMI} is lower than John's BMI of ${johnBMI}`
}
console.log(BMItemplate)
*/

