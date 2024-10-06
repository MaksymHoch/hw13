// 1

let a = 5;
let b = 10;
console.log(a * b);

// 2

let c = 20;
let d = 4;
console.log(c / d);

// 3

let e = 15;
let f = 25;
console.log(e + f);

// 4

let num1 = 11;
let bool = true;
let string1 = "java script";
let string2 = "100";

console.log(num1, bool, string1, string2);

// 5

let num = 1;
num += 11;
num *= 11;
num /= 11;
num++;
num--;
console.log(num);

// Завдання на введення/виведення:

// 1

let number = prompt("Введіть число:");
let square = number ** 2;
alert("Квадрат числа: " + square);

// 2

let num10 = parseFloat(prompt("Введіть перше число:"));
let num20 = parseFloat(prompt("Введіть друге число:"));
let average = (num10 + num20) / 2;
alert("Середнє арифметичне: " + average);

// 3

let minutes = prompt("Введіть кількість хвилин:");
let seconds = minutes * 60;
alert(minutes + " хвилин це " + seconds + " секунд");

// 4

let greeting = "Hello,";
let userName = prompt("Як вас звати?");
alert(greeting + " " + userName + "!");
