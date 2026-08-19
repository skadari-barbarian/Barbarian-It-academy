// JAVASCRIPT ARRAYS - COMPLETE PRACTICE


//  CREATING AN ARRAY

let fruits = ["Apple", "Mango", "Banana"];

console.log("Original array:");
console.log(fruits);



// ACCESSING ARRAY ELEMENTS


console.log("\nAccessing elements:");

console.log(fruits[0]);  
console.log(fruits[1]); 
console.log(fruits[2]); 


// CHANGING AN ELEMENT

fruits[1] = "Orange";

console.log("After changing Mango to Orange:");
console.log(fruits);


// ARRAY LENGTH

console.log("Array length:");
console.log(fruits.length);



//  PUSH - ADD AT END

fruits.push("Grapes");

console.log("After push:");
console.log(fruits);


// POP - REMOVE FROM END

fruits.pop();

console.log("After pop:");
console.log(fruits);


//  UNSHIFT - ADD AT BEGINNING

fruits.unshift("Pineapple");

console.log("After unshift:");
console.log(fruits);


// SHIFT - REMOVE FROM BEGINNING


fruits.shift();

console.log("After shift:");
console.log(fruits);


//  FOR LOOP

console.log("Using for loop:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}





//  INCLUDES

console.log("Using includes:");

console.log(fruits.includes("Apple"));   
console.log(fruits.includes("Orange"));  
console.log(fruits.includes("Car"));     


//  INDEXOF

console.log("Using indexOf:");

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Car")); // -1


//  SLICE

let moreFruits = [
    "Apple",
    "Mango",
    "Banana",
    "Orange"
];

let selectedFruits = moreFruits.slice(1, 3);

console.log("Using slice:");
console.log(selectedFruits);



//  SPLICE

let colors = [
    "Red",
    "Green",
    "Blue"
];

colors.splice(1, 1);

console.log("After splice:");
console.log(colors);




//  FOREACH

console.log("Using forEach:");

let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    console.log(number);
});

// MAP

let originalNumbers = [1, 2, 3, 4];

let doubledNumbers = originalNumbers.map(function(number) {
    return number * 2;
});

console.log("Using map:");
console.log(doubledNumbers);



//  FILTER

let marks = [45, 80, 60, 30, 90];

let highMarks = marks.filter(function(mark) {
    return mark > 50;
});

console.log("Using filter:");
console.log(highMarks);






let numbers2 = [10, 25, 30, 15, 40];

let firstNumber = numbers2.find(function(number) {
    return number > 20;
});

console.log("Using find:");
console.log(firstNumber);

//  FINDINDEX


let firstIndex = numbers2.findIndex(function(number) {
    return number > 20;
});

console.log("Using findIndex:");
console.log(firstIndex);


//  SOME

let marks2 = [45, 55, 80, 30];

let hasHighMark = marks2.some(function(mark) {
    return mark > 75;
});

console.log("Using some:");
console.log(hasHighMark);


//  EVERY

let marks3 = [45, 55, 80, 30];

let allAbove30 = marks3.every(function(mark) {
    return mark > 30;
});

console.log("Using every:");
console.log(allAbove30);



//  REDUCE


let prices = [100, 200, 300, 400];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log("\nUsing reduce:");
console.log(total);





//  ARRAY OF OBJECTS

let students = [
    {
        name: "Srihitha",
        marks: 90
    },

    {
        name: "Rahul",
        marks: 75
    },

    {
        name: "Anu",
        marks: 85
    }
];

console.log("Array of objects:");
console.log(students);


// ACCESS OBJECT INSIDE ARRAY

console.log("First student's name:");

console.log(students[0].name);

console.log("First student's marks:");

console.log(students[0].marks);


// MAP WITH OBJECTS
let studentNames = students.map(function(student) {
    return student.name;
});

console.log("Student names using map:");
console.log(studentNames);


//  FILTER WITH OBJECTS


let studentsAbove80 = students.filter(function(student) {
    return student.marks > 80;
});

console.log("Students with marks above 80:");
console.log(studentsAbove80);



//  FIND WITH OBJECTS


let srihitha = students.find(function(student) {
    return student.name === "Srihitha";
});

console.log("Finding Srihitha:");
console.log(srihitha);


//  FINDINDEX WITH OBJECTS

let studentIndex = students.findIndex(function(student) {
    return student.name === "Rahul";
});

console.log("Rahul's index:");
console.log(studentIndex);


// SOME WITH OBJECTS

let hasStudentAbove90 = students.some(function(student) {
    return student.marks > 90;
});

console.log("\nIs any student above 90?");
console.log(hasStudentAbove90);



//  EVERY WITH OBJECTS


let allPassed = students.every(function(student) {
    return student.marks >= 35;
});

console.log("Did every student pass?");
console.log(allPassed);



//  REDUCE WITH OBJECTS


let totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);

console.log("Total marks:");
console.log(totalMarks);


