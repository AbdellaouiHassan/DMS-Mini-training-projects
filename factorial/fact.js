const n = 5;
const k = 2;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
// function myFunction (number){
//     var j = 1 ;
//     for(i=1; i<=number; i++){
//         j *= i 
//     }
//     return j; 
// }

// console.log(myFunction(n)/ (myFunction(n-k) * myFunction(k)))

let keyword = "402135";
let message = "abcdef";


// Write an answer using console.log()
// To debug: console.error('Debug messages...');
var answer = "" ;

for (let x = 0; x < keyword.length; x++ ){
    let i = parseInt(keyword[x]);
    answer += message[i];
}

console.log(answer);