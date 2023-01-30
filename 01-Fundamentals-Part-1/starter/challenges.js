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


// // CODING CHALLENGE # 3
// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK
// */
// // Data 1
// // let dolphinsScore1 = 96
// // let dolphinsScore2 = 108
// // let dolphinsScore3 = 89

// // let koalasScore1 = 88
// // let koalasScore2 = 91
// // let koalasScore3 = 110

// // Data 2
// let dolphinsScore1 = 97
// let dolphinsScore2 = 112
// let dolphinsScore3 = 101

// let koalasScore1 = 109
// let koalasScore2 = 95
// let koalasScore3 = 123

// // Data 3
// // let dolphinsScore1 = 97
// // let dolphinsScore2 = 112
// // let dolphinsScore3 = 101

// // let koalasScore1 = 109
// // let koalasScore2 = 95
// // let koalasScore3 = 106

// let scoreMinimum = 100;


// const dolphinsAvgScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3; 

// const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAvgScore, koalasAvgScore)


// if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= scoreMinimum) {
//   console.log(`Dolphins Win with an average score of ${dolphinsAvgScore}`)
// } else if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore < scoreMinimum) {
//   console.log(`Dolphins outscored Koalas with an average score of ${dolphinsAvgScore} but did not meet the minimum score requirement of ${scoreMinimum}`)
// } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= scoreMinimum) {
//   console.log(`Koalas win with an average score of ${koalasAvgScore}`)
// } else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore < scoreMinimum) {
//   console.log(`Koalas outscored Dolphins with an average score of ${koalasAvgScore} but did not meet the minimum score requirement of ${scoreMinimum}`)
// } else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= scoreMinimum) {
//   console.log(`Both teams tie with an average score of ${dolphinsAvgScore}`)
// } else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore < scoreMinimum) {
//   console.log(`Both teams tie with an average score of ${dolphinsAvgScore} but neither team met the minimum requirement of ${scoreMinimum}`)
// }