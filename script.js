const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('.inputPrincipal')
let resultInput = document.querySelector('.result')
const copyBtn = document.querySelector('.btnCopy')

const allowedKeys = ['(', ')', '+', '-', '*', '/', '9', '8', '7', '6', '5', '4', '3', '2', '1','0', '.', '%', ' ']

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function() {
    input.value = ''
    resultInput.value = ''
    input.focus()
    uncopy()
})

input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0,-1)
    }

    if(ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = eval(input.value);
    uncopy()
}

document.querySelector('.btnSwitchTheme').addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#fff')
        root.style.setProperty('--font-color', '#222')
        root.style.setProperty('--btn-font-color', '#fff')
        main.dataset.theme = 'light'
    } else if (main.dataset.theme === 'light') {
        root.style.setProperty('--bg-color', '#222')
        root.style.setProperty('--font-color', '#fff')
        main.dataset.theme = 'dark'
    }
})

function copy() {
    if(copyBtn.innerText === 'Copy') {
        copyBtn.innerText = 'Copied!'
        copyBtn.classList.add('sucess')
        navigator.clipboard.writeText(resultInput.value)
    }
}

function uncopy() {
    if(copyBtn.innerText === 'Copied!') {
        copyBtn.innerText = 'Copy'
        copyBtn.classList.remove('sucess')
    }
}

document.querySelector('.btnCopy').addEventListener('click', copy)
//12 15 6.25