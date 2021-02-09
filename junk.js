/* const buttons = Array.from(document.querySelectorAll('.push'))
buttons.forEach(button => { button.addEventListener('click', push) })

const buttons = Array.from(document.querySelectorAll('.my-function'))
buttons.forEach(button => {
  console.log(button.classList)
})

document.querySelector('.push1').addEventListener('click', push1);
const demoEL = document.querySelector('.demo')

function push1() {
    const randomNum = Math.floor(Math.random() * 152) + 1;
    fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum)
.then(res => res.json())
.then(data => demoEL.textContent = data.name)
};

const demoEL = document.querySelector('.demo')
const randomNum = Math.floor(Math.random() * 152) + 1;



const regeneratorRuntime = require('regenerator-runtime')

const usersEl = document.querySelector('#users')
const dateEl = document.querySelector('.date')
const userEl = document.querySelector('.user')
const passEl = document.querySelector('.pass')

const drop = async () => {
    const data = await fetch(`http://localhost:3000/api/${usersEl.value}`)
    const { date, user, pass } = await data.json()

    dateEl.textContent = date
    userEl.textContent = user
    passEl.textContent = pass
    console.log()
} 

const push = async () => {
    const data2 = await fetch(`http://localhost:3000/api/`)
    const res2 = await data2.json()
    console.log(res2)
}

document.querySelector('#users').addEventListener('change', drop)
document.querySelector('.push1').addEventListener('click', push)
*/