
//alert("hemloo")
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector("#score")
let reuslt = 0
let hitPositon
let currentTime = 20
let timerid = null

function randomsquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });
    let randomsquare = squares[Math.floor(Math.random() * 9)]
    randomsquare.classList.add("mole")
    hitPositon = randomsquare.id
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPositon) {
            reuslt++
            score.textContent = reuslt
            hitPositon = null
        }
    })
})
function movemole() {
    timerid = setInterval(randomsquare,1000)
}
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDowntimerId)
        clearInterval(timerid)
        endResult()
        
        
    }
}
let countDowntimerId = setInterval(countDown, 1000)
function endResult(){
    const show=document.getElementById('display')
    show.innerHTML=(" GAME OVER! Your final score is "+ reuslt)
    
}

movemole()