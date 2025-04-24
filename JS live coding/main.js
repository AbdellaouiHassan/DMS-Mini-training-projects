//Changing the text dispalyed when clicking a button
// const title= document.getElementById("title");
// document.getElementById("btn").addEventListener("click", function(){
//     title.textContent= "agherdach";
//     title.style.color ="blue";
//     alert("kjgkjgjkh");
// });
// // document.getElementById("btn").addEventListener("dblclick", function(){
//     title.textContent= "chadi";
//     title.style.color = "red"
// })

// my version
const text = document.getElementById("text");
document.getElementById("red").addEventListener("click", function(){
    text.style.color = "red"
})

document.getElementById("green").addEventListener("click", function(){
    text.style.color = "green"
})

document.getElementById("yellow").addEventListener("click", function(){
    text.style.color = "yellow"
})

document.getElementById("purple").addEventListener("click", function(){
    text.style.color = "purple"
})

// adding items to a div
// let num=3;
// function myfunction(){
//     const item =document.createElement("p"); 
//     item.textContent = "item" + num;
//     document.getElementById("liste").appendChild(item);
// num++;
// }

// My version
const items = document.getElementById("items")
document.getElementById("addItems").addEventListener("click", function(){
    var counter = document.getElementById("ipt").value; 
     items.innerHTML= "";
    for(let i = 1; i <= counter  ; i++){
        const item = document.createElement("li");
        const del = document.createElement("button");
        del.textContent = "Delete item"
        // let j = i+2;
        item.textContent = "Item " + i ;
        
        items.appendChild(item);
    }
})

document.getElementById("removeItems").addEventListener("click", function(){
    items.removeChild(items.lastChild)
})

document.getElementById("removeall").addEventListener("click", function(){
    items.innerHTML= "";
})

// const btn = document.getElementById("btn");
// const ipt = document.getElementById("input");
// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("display").textContent = ":ikhiu " + ipt.value;
// })