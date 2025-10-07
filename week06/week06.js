//higher order function
const greet = (name,formatter) => formatter(name);
const shout = (text) => text.toUpperCase() + "!!!"

console.log(greet("Palm", shout)) //PALM!!!

//

let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    console.log(`dosomething: ${y + sum + x + mid + final}`)
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  doSomething()
  return mid + final + x + y + sum
}
const score = getScore(1)
console.log(score)
// console.log(x, mid, final) //cannot access


//pratice

function idGenerator(){
    let num = 0;
    function plus(){
    return ++num
    }
    return plus
}

const idGen = idGenerator()
console.log(idGen())
console.log(idGen())

//pratice2

function outerFunction(x){
    function add(y){
        return x+y
    }
    return add
}
const addFive = outerFunction(5)
console.log(addFive(3))
const addTen = outerFunction(10)
console.log(addTen(2))