var bill;
var tip__percentage; 
var number__of__people;

function storeBill(){
    bill = parseFloat(document.getElementById('bill').value);              
}                

function storeTipPercentage(percentage){
    tip__percentage = percentage;  
}
                
function storeNumberOfPeople(){
    number__of__people = parseFloat(document.getElementById('n-of-people').value);
}
                
document.getElementById("n-of-people").addEventListener( "blur", function( ){
    let tip = bill * tip__percentage;
    var tip__per__person = tip / number__of__people;
    document.getElementById("display-tip").textContent ="$"+ tip__per__person.toFixed(2);
    let total = bill + tip;
    let total__per__person = total / number__of__people;
    document.getElementById("display-total").textContent ="$"+ total__per__person.toFixed(2);
})               
                
document.getElementById("reset-btn").addEventListener( "click", function(){
    document.getElementById("display-tip").textContent ="$0.00";
    document.getElementById("display-total").textContent ="$0.00";
    document.getElementById('n-of-people').value = "";
    document.getElementById('bill').value = "";
    for ( x of document.getElementById("tip").children){
        x.classList.remove("tip-btnSelected");
    }
})                

document.getElementById("tip").addEventListener("click", function(e){
    const clicked = e.target;
    for ( x of document.getElementById("tip").children){
        x.classList.remove("tip-btnSelected");
    }
    clicked.classList.toggle("tip-btnSelected")
})

document.getElementById("bill").addEventListener("focus", function(){
    document.getElementById('bill').value = "";
})

document.getElementById("n-of-people").addEventListener("focus", function(){
    document.getElementById('n-of-people').value = "";
})
                

