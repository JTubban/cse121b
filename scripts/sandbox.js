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

// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// document.querySelector("#array").innerHTML = numbersArray;
/* Output Odds Only Array */
// console.log(numbersArray.filter((num) => num % 2 === 1));

// W04
// let nameList = ["James", "Juliet", "Jaxx"];

// const names = ["James", "Juliet"];

// names[0] = 1;

// console.log(names);

// let name = "James";
// // const name = 0;
// console.log(name);

// const employees = [
//     {
//         id: 101,
//         name: 'Alex',
//         sal: 10000
//     },
//     {
//         id: 102,
//         name: 'Clark',
//         sal: 13000
//     },
//     {
//         id: 103,
//         name: 'John',
//         sal: 12000
//     },
//     {
//         id: 104,
//         name: 'Tony',
//         sal: 20000
//     }
// ]

// employees.forEach(function(emp) {
//     console.log(emp.name.toUpperCase());
// });

// console.log(emp);

// const names = employees.map((emp) => emp.name);
// console.log(names);

// const words = ['lol','brb','btw','lmk','g2g'];
// const abbreviations = words.map(function(word) {
//     return word.toUpperCase().split('').join('.');
// });

// const abbreviations = words.map((word) => word.toLowerCase().split('').join('.'));

// console.log(abbreviations);

// const numberList = [1,2,3];

// const sumOfNumbers;

// const sumOfNumbers = numberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sumOfNumbers);

// function add(number) {
//     for (let i = 0; i < numberList.length; i++) {
//         console.log(numberList[i] + number);
//     }
// }

// add(2);

// console.log(numberList);

// const filteredNumber = numberList.filter(num => num > 2);
// console.log(filteredNumber);

// let names = {firstName:'John', 'lastName':'Doe'}

// console.log(names['firstName']);

// const employees = [
//     {
//         id: 101,
//         name: 'Alex',
//         sal: 10000
//     },
//     {
//         id: 102,
//         name: 'John Wayne',
//         sal: 23000
//     },
//     {
//         id: 103,
//         name: 'Clark',
//         sal: 22000
//     },
//     {
//         id: 104,
//         name: 'Tony Wayne',
//         sal: 20000
//     }
// ];

// const filtered = employees.find(e => e.sal >= 20000);
// console.log(filtered);

// let name;
// const result = employees.filter(n => n.name.includes('Wayne'));
// result.forEach((n => name = n.name));

// console.log(result[0].name);
// console.log(name);

// const words = ['kia','karen','king','korean'];

// console.log(words.every(word => word[words.length - 1] === 'g'));

// console.log(words.every(word => word[2] === 'g'))
// console.log(words.some(word => word[words.length - 1] === 'k'))

// sort()
// Example — 1: Natural Order Sorting
// const nums = [1,20,10,22,30,44,100,11];
// console.log(nums.sort());

// Example — 2: Ascending order sorting
// const nums = [1,20,10,22,30,44,100,11];
// console.log(nums.sort((a,b) => a - b));

// Finding max value on a list
// const nums = [44,2,66,45,200,17];
// let result = nums.reduce((max, item) => Math.max(max, item));
// console.log(result);

const myProfile = {
    name: 'James Tubban',
    photo: 'images/me.png',
    favoriteFoods: [
        'Rice',
        'Pork Adobo',
        'Sisig',
        'Roast Pork',
        'Grilled Steak'
    ],
    hobbies: [
        'Book reading',
        'Coding',
        'Body building',
        'Playing guitar',
        'Eating'
    ],
    placesLived: [],
};

myProfile.placesLived.push(
    {
        place: 'Tuao, Philippines',
        length: '23 years'
    },
    {
        place: 'Rizal, Philippines',
        length: '7 years'
    },
    {
        place: 'Honolulu Hawaii, HI',
        length: '2 years'
    },
);

// const favFoods = document.querySelector('#favorite-foods');
// myProfile.favoriteFoods.forEach((food) => food);
// console.log(foods);

myProfile.placesLived.forEach(pl => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    
    // dt.textContent = pl.;
    pl

    document.querySelector('#places-lived').appendChild(dt);
});