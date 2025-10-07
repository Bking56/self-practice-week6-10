// document.getElementById(idValue) //return the first object with ID value
// document.querySelector(cssSelector) //return the first element that matches selector
// document.querySelectorAll(cssSelector) //return all elements that matches selector (NodeList - Array like (can use for each, if you want to use array functions, you need to convert array like to array))
/*
//1. query an element node that has id "soup"
const soupIdElement = document.getElementById("soup")
console.log(soupIdElement) //<ul id="soup">

const soupSelectorElement = document.querySelector("#soup")
console.log(soupSelectorElement) //<ul id="soup">

//get NodeList collection
const soupSelectorAllElement = document.querySelectorAll("#soup")
console.log(soupSelectorAllElement) //NodeList [ ul#soup ]
console.log(soupSelectorAllElement.length) //1
console.log(soupSelectorAllElement[0]) //<ul id="soup">
soupSelectorAllElement.forEach((ele) => console.log(ele)) //<ul id="soup">

//2. query an element nodes that have class "vegan"
const veganElements = document.querySelectorAll(".vegan")
console.log(veganElements) //NodeList(3) [ li.vegan, li.vegan, li.vegan ]
//3. query any element nodes that have class "meat"
const meatElements = document.querySelectorAll(".meat")
console.log(meatElements) //NodeList(4) [ li.meat, li.meat, li.meat, li.meat ]
//4.
const firstVeganElement = document.querySelector(".vegan")
console.log(firstVeganElement) //<li class="vegan">Vegetable Rolls</li>
//5.
const firstMeatElement = document.querySelector(".meat")
console.log(firstMeatElement) //<li class="meat">Chicken Wings</li>

//access each meat element
meatElements.forEach((ele) => {
    const meatElement = ele 
    //find meat element that has text value equals to "Beef Soup" 
    // <li class="meat"> Beef Soup</li> and store in variable beefSoupElement
    if(meatElement.textContent.trim().includes("Beef Soup")){
        beefSoupElement = meatElement
        console.log(beefSoupElement)
    }

    console.log(meatElement)
})
 // traverse all children nodes of <ul id="appetizer"> by using sibling relationship
const app = document.getElementById("appetizer")
//const firstelement = document.querySelector("ul#appetizer>li.vegan")
let child = app.firstElementChild
while(child){
        console.log(child)
        child = child.nextElementSibling
}
//getElementsByName(NodeList)
const nameAttrElements = document.getElementsByName("fname")
console.log(nameAttrElements) //NodeList [input#fname, input#fullname] //ใช้ forEach ได้

//getElementsBtTagName - tagname (HTMLCollection)
const liElement = document.getElementsByTagName("li")
console.log(liElement) //HTMLCollection {0: li.vegan, 1: li.meat, 2: li.meat, 3: li.meat, 4: li.vegan, 5: li.meat //ใช้ forEach ไม่ได้
//,6: li.vegan, length:7}
//getElementsByClassName - class name(HTMLCollection)
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements) //HTMLCollection { 0: li.vegan, 1: li.vegan, 2: li.vegan, length: 3 } //ใช้ forEach ไม่ได้

// 1. remove Vegetable Soup
//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)
//2. get its children
const ulChildren = ulParent.children
let vegetElement = null
//3. find element node that satifies condition "Vegetable Soup"
Array.from(ulChildren).forEach((liEle) => {
  if (liEle.textContent.trim() === "Vegetable Soup") vegetElement = liEle
})
//4. remove element 3.
ulParent.removeChild(vegetElement)

// 2. insert <li class="vegan">Cabbage Soup</li> Before <li class="meat">Beef Soup</li>

//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)

//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Cabbage Soup"
newLiElement.setAttribute("class", "vegan")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. insertBefore
ulParent.insertBefore(newLiElement, beefElement)

// 3. replace  Beef Soup with Pork Soup
//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)

//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Pork Soup"
newLiElement.setAttribute("class", "meat")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. replace
ulParent.replaceChild(newLiElement, beefElement)  */


