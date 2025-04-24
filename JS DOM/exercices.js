// // 1. Variables
// // Exercice 1: declaring variables.
// var name = "Hassan";
// var age = 24;
// console.log("Your name is " + name + ", and you're " + age + " years old.");

// // Exercice 2: reassigning variables.
//  var a = "value 1 ";
//  var b = true;
//  console.log(a + b);
//  a = "value 2 ";
//  b = false;
// console.log(a + b);

// //Exercice 3: trying to reassign a const variable and seeing whhat happens.
// const country = 'Morocco';
// console.log(country);
// country = 'USA';
// console.log(country);
// //the code throws an error because you can't reassign a const variable.

// //Exercice 4: the area of rectangle.
// var length = 22;
// var width = 4;
// var area = length * width;
// console.log(area);


// //2. Data Types
// // Exercice 1: typeof data  
// var a = 42;
// var b = "Bonjour";
// var c = true;
// console.log(typeof(a) );
// console.log(typeof(b) );
// console.log(typeof(c));

// //Exercice 2: Concatenation of a string and a number and seeing what happens
// var str = "Hassan";
// var num = 24;
// var concat = str + num;
// console.log(concat);
// console.log(typeof(concat));
// //The num variable who was initially declared as a number turned into a string when it was concatenated with another string variable.

// //Exercice 3: Working with arrays, checking if array
// var arr = [1, 2, 3];
// var wacharray =Array.isArray(arr);
// console.log(wacharray);

// //3. Operators
// //Exercice 1: Sum of 5 + "5"
// console.log(5 + "5");
// //The first string number turns the second number into a string also.

// //Exercice 2: Checking if a number is odd or even
// var number = 7; 
// if (number % 2 == 1){
//     console.log(number + " is odd");
// }
// else {
//     console.log (number + " is even");
// }

// //Exercice 3: working with "==" and "==="
// var a = 5;
// var b = '5';
// if (a === b) {
//     console.log("The 2 variables are equal and has the same Data type");
    
// }
// else if(a == b){
//     console.log("The 2 variables are equal but doesn't have the same Dat type");
// }

// // Exercice 4: working with different type of assignment operators
// var counter = 0
// console.log(counter)
// counter = counter + 1
// console.log(counter)
// counter += 1;
// console.log(counter)
// counter ++;
// console.log(counter)

// //Conditionals
// //Exercice 1: Checking if a number is positif or nrgatif
// var number = -3;
// if (number > 0){
//     console.log("Number is positif"); 
// }
// else if(number < 0){
//     console.log("Number is negatif");

// }
// else{
//     console.log("Number is null");

// }

// //Exercice 2: Displaying Good morning if hour is less than 12
// var hour = 8;
// if (hour < 12){
//     console.log("Good Morning");
// }
// else{
//     console.log("Good Evening");
// }

// //Exercice 3: Checking if a word has more than 5 charcters or not
// var word = "JavaScript";
// if (word.length > 5){
//     console.log(word + " has more than 5 characters")
// }
// else {
//     console.log(word + " has less than 5 characters")
// }

// //Loops 
// //Exercice 1: Displaying the numbers from 0 to 10 with a for loop
// for (var i = 1; i <= 10; i++ ){
//     console.log(i);
// }

// //Exercice 2: Calculaating the sum of the numbers from 1 to 100 with a while loop
// var i = 0
// var sum = 0
// while (i <= 100){
//     sum += i;
//     i++ 
// }
// console.log(sum);

// //Exercice 2: Working wit for of loop to display an array elements
// var class_1 = ["chadi", "adnane", "yassir"];
// for (var x of class_1){
//     console.log(x);
// }

// //Exercice 3: Displaying The odd numbers between 0 and 20
// var number = 0;
// for(var i = 0; i <= 20; i++){
//     if(number % 2 == 1){
//         console.log(number);
//     }
//     number ++;
// }


// // JS Day 3: loops and arrays
// // loops
// // 1 counting from 1 to 10 using for loop
// for ( let i=1; i<=10; i++ ){
//     console.log(i);
// }

// //2: the sum of the even numbers
// var sum = 0;
// for (let i = 0; i<=20; i++){
//     if(i % 2 == 0){
//         sum += i;
//     }
// }
// console.log(sum)


//3: gettin a number from the user and dispalying the table of multiplicatin from 1 to 10 of the prompted numbre
// var num = Number(prompt("Enter a number: "))
// for(let i = 0; i <= 10; i++){
//     console.log(i*num);
// }
// Note: it will only work in the browser console because prompt() isn't supported in node js environment;


////3: prompting the user to Enter a word and counting the voyels on it.
// var word = String(prompt("Enter a word"));
// var counter = 0;
// for( x of word){
//     if(x === "a"|| x === "e" || x === "i" || x === "u"|| x === "y" || x === "o"  )
//         counter ++;   
// }
// console.log(word + " has " + counter + " vowels");


// //Arrays
// //1: Displaying elements of an array using a loop.
// var arr =["Ali", "Sophie", "Karim"]
// for (x of arr){
//     console.log (x);
// }


// //2: calculating the moyen of a notes tabel
// var arr = [10, 12, 15, 18]
// var sum = 0;
// for (x of arr){
//     sum += x;
// }
// var moyen = sum / arr.length
// console.log (moyen)


// //3: Filtering the odd numbers.
// var arr = [1, 4, 7, 10, 11]
// var odds = []
// for(x of arr){
//     if(x % 2 == 1){
//         odds += x + ", ";
//     }
// }
// console.log(odds);


// //4: Checking for the biggest number
// checkForTheBiggest()
// function checkForTheBiggest(){
//     var arr = [8, 3, 15, 6]
//     var biggest = arr[0]
//         for (x of arr){
//         if (x > biggest){
//             biggest = x;
//         }
//     }
//     console.log(biggest);
// }
//
