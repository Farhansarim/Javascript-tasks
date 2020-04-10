// My first js code!
console.log('Hello world');

// variables
let name = 'Farhan';
console.log(name);
//can;t be a reserved keyword
//should be meaningful descriptive
//can't start with a number (1name)
//can;'t contain a space or hyphen (-)

let lastName = 'Muhammad';
let Name = 'Farhan';
//
let interestRate = 0.3;
 interestRate = 1;
console.log(interestRate);

// variable typew string,
let myName = 'Arfa'; 
//string Literal
let  age = 12; //number Literal
let isApproved = false; //Boolean Literall
let firstName = undefined; //undefined(variable and undefined)
// let selectedColorS = null; //null(object)


let student = 'Alia';
let umr = 20;
let person = {
    student: 'Alia',
    age: 20
};
console.log(person);

//Dot Notation
person.student = 'Arfa';

//Bracket Notation
let selection = student;
person['student'] = 'Ibrahim'; 

console.log(person.student);

let selectedColors =['red', 'blue'];
selectedColors[2] = '1';
console.log(selectedColors.length);

//performing a Task
function greet (name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('ibrahim', 'Anaya');
greet('Ahmad', 'Amtal');

//Calculating a Value
function square(number) {
    return number * number;
}
// let number = square(5);
console.log(square(5));


