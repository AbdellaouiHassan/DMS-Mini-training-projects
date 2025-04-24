// // Selection methodes en JS.
// // 1: id selector
// var idSelector = document.getElementById('header');
// console.log(idSelector)

// // 2: class selector
// var classSelector = document.getElementsByClassName('.content')
// console.log(classSelector)
// //class selector returns an array of all the items with the same class, to store one of them in a variable you have to use it's index

// // 2: tag selector
// var tagSelector = document.getElementsByTagName('li')
// console.log(tagSelector)

// // 3: query selector 
// var querySelector = document.querySelector('li')
// console.log(querySelector)
// // Query selector only returns the first item of the Query selected 

// // 4: query selector all
// var querySelectorAll = document.querySelectorAll('li')
// console.log(querySelectorAll)
// // query selector all returns all the items of the query selected


// // modifying the content and the attributes

// //1: text content
// var header = document.getElementById('header')
// header.textContent = "F off"
// header.innerText = "No you f off "
// header.innerHTML = 'Shut up both of you, Daddy\'s home'

// // Set/Get Attributes
// var header = document.getElementById('btn')
// header.setAttribute( 'hidden', 'disabled' ) 

// classes, add and and remove onclick event
// var home = document.getElementById('home')
// var contact = document.getElementById('contact')
// var about = document.getElementById('about')
// function selected(items){ 
//     var parent = items.parentElement
//     var childrens = parent.children
//     items.classList.add("selected")
    // home.classList.add("selected")
    // contact.classList.remove("selected")
    // about.classList.remove("selected")
// }
// function contactSelected(){
//     contact.classList.add("selected")
//     home.classList.remove("selected")
//     about.classList.remove("selected")
// }
// function aboutSelected(){
//     about.classList.add("selected")
//     contact.classList.remove("selected")
//     home.classList.remove("selected")
// }
