
/*
//query div element with id "exampleElement"
const divElement = document.getElementById("exampleElement")
// div  childNodes
const divChildNodes = divElement.childNodes //return NodeList data type
console.log(`length: ${divElement.childNodes.length}`)
divChildNodes.forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
//div children
const divChildren = divElement.children //return HTMLCollection data type
console.log(`length: ${divElement.children.length}`)
Array.from(divChildren).forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
 */

/*
//create <p id= 'int141'>INT141</p> as a child of <div id= "subject">
const sub = document.getElementById("subject")
const p = document.createElement("p")
//set attribute
const idAttr = document.createAttribute('id')
idAttr.value = "int141"
p.setAttribute(idAttr)
p.setAttribute("style", "color:red")
p.setAttribute("name", "core")
//create text node then append to <p> child
const pText = document.createTextNode('INT141')
p.appendChild(p)
//วิธีลัด 
//p.textContent = "INT141"

//append <p> with text node to div element
sub.appendChild(p)

//get attribute value of 'id'
console.log(p.getAttribute("id")) //int141
console.log(p.attributes[0])      //id= "int141"
console.log(p.attributes[0].ownerElement)  //<p id= "int141"> IMT140</p<
const pAttribute = p.attributes
for (let i = 0;i<pAttribute.length; i++){
    const name = pAttribute[i].name //get attribute name
    const value = pAttribute[i].value //get attribute value
    if(pAttribute[i].name === "id") console.log(name, value) 
} 
*/

const drink = document.getElementById("drink")
const allDrinks = drink.children
Array.from(allDrinks).forEach((drink) => console.log(drink))
let Teadrink = allDrinks[1]
console.log(Teadrink.textContent)
console.log(Teadrink.previousElementSibling)
console.log(Teadrink.nextElementSibling)
console.log(Teadrink.parentElement)