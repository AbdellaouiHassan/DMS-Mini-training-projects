// var bill = Number(prompt("How much is your bill? "));
// var tip = Number(prompt("Enter the tip percentage? "));
// var people = Number (prompt ("How many people are you? "));
// var i = tipPerPersonCalculator(bill, tip, people);
// var j = totalPerPersonCalculator(bill, tip, people);
// console.log("Your tip / person is: " + i);
// console.log("Your total / person is: " + j );

function tipPerPersonCalculator( bill, tipPercentage, numberOfPeople){
   let tip = bill * tipPercentage;
   let tipPerPerson = tip / numberOfPeople;
    return tipPerPerson;
}

function totalPerPersonCalculator(bill, tipPercentage, numberOfPeople){
    let tip = bill * tipPercentage;
    let total = bill + tip;
    let totalPerPerson = total / numberOfPeople;
    return totalPerPerson;
}


