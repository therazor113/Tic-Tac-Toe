const regeneratorRuntime = require('regenerator-runtime')

// player start
let player = ''
const playerEl = document.querySelector('.message')
playerEl.textContent = player
let gameState = ['', '', '', '', '', '', '', '', '']
let roundWon = false

// Calling Cells
const cells = document.querySelectorAll('.cell')
cells.forEach(el => el.addEventListener('click', () => {
    if (!player || el.textContent) return

    // Set game state
    const cellId = parseInt(el.id)
    gameState[cellId] = player
    el.textContent = player

    // Check if someone has won
    console.log(player)
    resultWin(player)
    if (roundWon) return
    
    // If not, next turn
    el.style.cursor = 'default'
    player = player === 'X' ? 'O' : 'X'
    playerEl.textContent = `Turn: ${player}`
}))

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
]

const resultWin = currPlayer => {
    const cells = document.querySelectorAll('.cell')
    let result = false

    cells.forEach(() => {
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i]
            const a = gameState[winCondition[0]]
            const b = gameState[winCondition[1]]
            const c = gameState[winCondition[2]]
            if (!a || !b || !c) continue

            if (a === b && b === c) {
                result = true
                break
            }
        }
    })

    if (result) checkEl(currPlayer)

    // Check if values are filled, if so, tie game
    let tie = true
    cells.forEach(el => {
        if (tie && !el.textContent) { tie = false }
    })

    if (tie) checkEl('No One')
}

const checkEl = currPlayer => {
    roundWon = true
    document.querySelector('.button').style.display = 'block'
    document.querySelector('.start').textContent = 'Reset'

    // Declare winner
    playerEl.textContent = `${currPlayer} Wins!`
    player = ''
}

// start - reset
document.querySelector('.start').addEventListener('click', () => {
    gameState = ['', '', '', '', '', '', '', '', '']
    cells.forEach(el => el.textContent = '')
    cells.forEach(el => el.style.cursor = 'pointer')
    player = 'X'
    roundWon = false
    playerEl.textContent = `Turn: ${player}`
    document.querySelector('.button').style.display = 'none'
})
