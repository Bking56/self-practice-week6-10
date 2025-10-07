const userNameEle = document.getElementById("username")
const passwordEle = document.getElementById("password")
const confirmpassEle = document.getElementById("confirm-password")
const email = document.getElementById("email")
const buttonSubmit = document.getElementById("submit")
const para = document.querySelector("p");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    let errorText = ''
    if (!userNameEle.value || !passwordEle.value || !confirmpassEle.value || !email.value) {
        errorText += "missing some values, please try again!"
    }


    if (passwordEle.value !== confirmpassEle.value  ) {
        errorText += "password and confirm do not matchg. check again"
    }

    if (errorText) {
        para.style.color = "red"
        para.innerHTML = errorText;
    } else {
        para.style.color = "green"
        const succesText = "your Data complete"
        para.innerHTML = succesText
    }
})

