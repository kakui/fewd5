//VARIABLES EXERCISES

//Fortune Teller

var nameOfTitle = 'developer';
var nameOfLocation = 'Hong Kong';
var nameOfSpouse = 'Katie';
var numberOfKids = 5;

var firstSentence = 'You will be a ' + nameOfTitle + ' in ' + nameOfLocation + ', and married to ' + nameOfSpouse + ' with ' + numberOfKids + ' kids.';

console.log(firstSentence);

//Age Calculator

var currentYear = 2014;
var birthYear = 1990;

var firstAge = currentYear - birthYear;
var secondAge = currentYear - birthYear - 1;

var secondSentence = 'They are either ' + firstAge + ' or ' + secondAge;

console.log(secondSentence);

//Lifetime Supply Calculator

var currentAge = 23;
var maxAge = 100;
var snackPerDay = 4;

var totalLifeSnacks = (maxAge - currentAge) * snackPerDay;

var thirdSentence = 'You will need ' + totalLifeSnacks + ' to last you until the ripe old age of ' + maxAge;

console.log(thirdSentence);

//Geometrizer

// Circumference of Circle = (Pi)2r
// Area of a Cicle = (Pi)r^2

var circleRadius = 5;
var circleCircumference = Math.PI * circleRadius * 2;
var circleArea = Math.PI * Math.pow(circleRadius, 2);

var fourthSentence = 'The circumference is ' + circleCircumference;

console.log(fourthSentence);

var fifthSentence = 'The area is ' + circleArea;

console.log(fifthSentence);


//Temperature Converter

var tempCelsius = 0;
var convertFahrenheit = (tempCelsius * 9) / 5 + 32;

var sixthSentence = tempCelsius + ' C is ' + convertFahrenheit + ' F.';
console.log(sixthSentence);

var tempFahrenheit = 100;
var convertCelsius = (tempFahrenheit - 32) * 5 / 9;

var seventhSentence = tempFahrenheit + ' F is ' + convertCelsius + ' C.';

console.log(seventhSentence);


function sayMyName(){
	console.log("Hey KK!");
	console.log("Wazaaa");
} 

sayMyName();
sayMyName();

function sayUrName(name){
	console.log('heyz ' + name + '!');
}

sayUrName('Kui');
sayUrName('Ka');
sayUrName('Chu');

function addNumbers(num1, num2){
	var result = num1 + num2;
	return result;
}

var future = addNumbers(2014, 4);
var num = addNumbers(10, 2);

console.log(addNumbers(future, num));

var timesCalledFunction = 0

function myFunction(){
	timesCalledFunction = timesCalledFunction + 1;
}

myFunction();
myFunction();
myFunction();

console.log(timesCalledFunction);


//FUNCTIONS EXERCISES


//Fortune Teller


function tellFortune(child, partner, geo, job){
	var x = 'You will be a ' + job + ' in ' + geo + ', and married to ' + partner + ' with ' + child + ' kids.';
	return x;
}

console.log(tellFortune(3, 'Chu', 'NY', 'developer'));
console.log(tellFortune(5, 'Jel', 'SF', 'salesman'));
console.log(tellFortune(4, 'Mil', 'LA', 'pilot'));


// function tellFortune(child, partner, geo, job){
// 	var x = 'You will be a ' + job + ' in ' + geo + ', and married to ' + partner + ' with ' + child + ' kids.';
// 	console.log(x);
// }

// tellFortune(3, 'Chu', 'NY', 'developer');
// tellFortune(5, 'Jel', 'SF', 'salesman');
// tellFortune(4, 'Mil', 'LA', 'pilot');


//Age Calculator (includes bonus)

function calculateAge(birth){
	var currentYear = new Date().getFullYear();
	var x = currentYear - birth;
	var y = currentYear - birth  - 1;
	var z = 'You are either ' + x + ' or ' + y;
	return z;
}

var currentYear = new Date().getFullYear();

console.log(calculateAge(1990));
console.log(calculateAge(1980));
console.log(calculateAge(1989));

//Lifetime Supply Calculator

function calculateSupply(age, perDay){
	var maxAge = 100;
	var x = (maxAge - age) * perDay;
	var y = 'You will need ' + Math.round(x) + ' snacks to last you until the ripe age of ' + age;
	return y;
}

console.log(calculateSupply(20, 2.555));
console.log(calculateSupply(30, 5.99));
console.log(calculateSupply(40, 10));

//Geometrizer
//Circumference = 2PIr
//Area = PIr^2

function calcCircumference(radius){
	var x = Math.PI * radius * 2;
	return x;
}

console.log('The circumference is ' + calcCircumference(5));

function calcArea(radius){
	var x = Math.PI * Math.pow(radius, 2);
	return x;
}

console.log('The area is ' + calcArea(5));

//Temperature Converter

// var convertCelsius = (tempFahrenheit - 32) * 5 / 9;

function celsiusToFahrenheit(celsius){
	var x = (celsius * 9) / 5 + 32;
	return x;
}

console.log(0 + ' C is ' + celsiusToFahrenheit(0) + ' F');

function fahrenheitToCelsius(fahrenheit){
	var x = (fahrenheit - 32) * 5 / 9;
	console.log(fahrenheit + ' F is ' + x + ' C');
	return x;
}

fahrenheitToCelsius(100);

