const squares = document.querySelectorAll('.square')
const score = document.querySelector('#score')
const Timeleft = document.querySelector('#time-left')
const mole = document.querySelector('.mole')

let result = 0
let hitPostion
let timeleft = 60 
let timerId = null

function randomsquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomsquare = squares[Math.floor(Math.random() * 9)]
    randomsquare.classList.add('mole')
    hitPostion = randomsquare.id
    
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostion) {
            result++
            score.textContent = result
            hitPostion = null
        }
    })
})


function moveMole() {
    timerId = setInterval(randomsquare, 1000)
}

moveMole()

function countdown() {
timeleft--
Timeleft.textContent = timeleft
if (timeleft == 0) {
    clearInterval(setTimerID)
    clearInterval(timerId)
    alert("you score is " + result)
    
    
}

}

let setTimerID = setInterval(countdown, 1000)
