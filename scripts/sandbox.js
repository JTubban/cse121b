// function main() {
//     let firstName = 'Antonia';
//     let lastName = 'Francesca';

//     console.log(fullName(firstName, lastName));
//     console.log(fullName1(firstName, lastName));
//     console.log(fullName2(firstName, lastName));
// }

// function fullName(first, last) {
//     return `${first} ${last}`;
// }

// const fullName1 = function(first, last) {
//     return `${first} ${last}`;
// }

// const fullName2 = (first, last) => `${first} ${last}`;

// main();

// let firstName1 = 'James';
// let lastName1 = 'Tubban';

// const fullName3 = document.querySelector("#fullName");
// fullName3.textContent = fullName(firstName1, lastName1);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// const result = words.filter((word) => word.length > 5);

// console.log(result);

// let scores = [56, 78, 95, 77, 65, 86];
// let target = scores.indexOf(890);
// console.log(target);

// const points = [100,88,94,78,84,69];

// function convertPointsToStatus(pointTotal) {
//   let status = 'Not Complete';
//   if (pointTotal >= 93) {
//     status = 'Excellent';
//   } else if (pointTotal >= 70) {
//     status = 'Complete';
//   }
//   return status;
// }

// const statusReport = points.reduce(convertPointsToStatus);
// console.log(statusReport);

// map()
// const numbers = [2, 2, 2, 2];

// console.log(numbers);

// const numbers = [1, 4, 9];
// const roots = numbers.filter((num) => num >= 9);

// console.log(roots);

// let namesB = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
// let b = namesB.filter((name) => name[0] === "B");
// console.log(b);

// let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
// let namesLength = names.map((name) => name.length);
// console.log(namesLength);

// let reduceNumbers = names.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0) / names.length;
// console.log(reduceNumbers)

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);

// const date = new Date();
// const currentYear = date.getFullYear()
// console.log(currentYear);

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// document.querySelector("#array").innerHTML = numbersArray;
/* Output Odds Only Array */
console.log(numbersArray.filter((num) => num % 2 === 1));