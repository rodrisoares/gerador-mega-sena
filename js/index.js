let btn = document.getElementById('btn')
let numeroGerado1 = document.getElementById('numeroGerado1')
let numeroGerado2 = document.getElementById('numeroGerado2')
let numeroGerado3 = document.getElementById('numeroGerado3')
let numeroGerado4 = document.getElementById('numeroGerado4')
let numeroGerado5 = document.getElementById('numeroGerado5')
let numeroGerado6 = document.getElementById('numeroGerado6')

function sorte(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function print() {
    numeroGerado1.innerHTML = `${sorte(1, 10)}`
    numeroGerado2.innerHTML = `${sorte(11, 20)}`
    numeroGerado3.innerHTML = `${sorte(21, 30)}`
    numeroGerado4.innerHTML = `${sorte(31, 40)}`
    numeroGerado5.innerHTML = `${sorte(41, 50)}`
    numeroGerado6.innerHTML = `${sorte(51, 60)}`
}

btn.addEventListener('click', print)


