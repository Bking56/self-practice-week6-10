const keyLog = document.getElementById('keyLog')
const keyInput = document.getElementById('keyInput')
console.log(keyLog);
console.log(keyInput);

keyInput.addEventListener('keyup', (e) => {
    const textInput = document.createElement('p')
    textInput.textContent = e.key
    keyLog.appendChild(textInput)
})

