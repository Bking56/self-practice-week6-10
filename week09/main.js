// const message = document.querySelector("#massage")
// const display = document.querySelector("p")
// message.addEventListener("chang",function)

const message = document.querySelector("#message"); // ให้ตรงกับ id ใน HTML
const display = document.querySelector("p");

// ฟังก์ชันเมื่อเกิด change event
function handleChange(e) {
  display.textContent = `You typed: ${e.target.value}`;
}

// เพิ่ม event listener
message.addEventListener("change", handleChange);







const aElement = document.querySelector("a")
aElement.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("visit link was canceled")
})

//when click submit button, prevent default behavior and validate form data
const submitButton = document.querySelector("input[type='submit']")
console.log(submitButton)

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  //validate data
  const inputElements = document.querySelectorAll("input")
  inputElements.forEach((ele) => {
    const attr = ele.getAttribute("type")
    if (attr === "text") {
      if (ele.value.trim().length === 0) console.log("invalid data")
    }
  })
})
 

const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter')  console.log(event.target.value)
})
 