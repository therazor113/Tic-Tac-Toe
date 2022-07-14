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
    const cellId = parseInt(el.id - 1)
    gameState[cellId] = player
    el.textContent = player

    // Check if someone has won
    resultWin(player)
    if (roundWon) return
    
    // If not, next turn
    el.style.cursor = 'default'
    player = player === 'X' ? 'O' : 'X'
    playerEl.textContent = `Turn: ${player}`
}))

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

const resultWin = currPlayer => {
    const cells = document.querySelectorAll('.cell')
    let result = false

    // each call to cells, check if the gameState 
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
    // If result then currPlayer wins!
    if (result) checkEl(currPlayer)
    // Check if all values are filled, if so, No one wins!
    if (gameState.every(Boolean) && !result) checkEl('No One')
}

const checkEl = currPlayer => {
    roundWon = true
    document.querySelector('.button').style.display = 'block'
    document.querySelector('.start').textContent = 'Reset'

    // Declare winner
    playerEl.textContent = `${currPlayer} Wins!`
    player = ''
}

// Start - Reset
document.querySelector('.start').addEventListener('click', () => {
    gameState = ['', '', '', '', '', '', '', '', '']
    cells.forEach(el => el.textContent = '')
    cells.forEach(el => el.style.cursor = 'pointer')
    player = 'X'
    roundWon = false
    playerEl.textContent = `Turn: ${player}`
    document.querySelector('.button').style.display = 'none'
})
