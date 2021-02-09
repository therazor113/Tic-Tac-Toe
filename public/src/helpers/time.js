import {player} from './player.js'

let gameState = ["", "", "", "", "", "", "", "", ""]
let cells = document.querySelectorAll('.cell')

const gameEl = () => {
    cells.forEach(el => el.addEventListener('click', function() {
        const cellsId = parseInt(el.id)
        gameState[cellsId] = player
        return
    }))
}

export {gameEl, gameState, cells}