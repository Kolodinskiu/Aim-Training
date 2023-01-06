const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['blue', 'yellow', 'purple','blueviolet','orange','salmon','fuchsia','gold','hotpink','limegreen',]

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')

} )
timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
        
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
    
}

function decreaseTime() {
    if (time === 0){
        finishGame()
    } else {
        let current = --time
        if(current < 10 ){
         current = `0${current}`
        }
    
        setTime(current)
    }
    
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.remove()
    board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span> </h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandonNumber(10, 100)
    const {width, height} = board.getBoundingClientRect()
    
    
    const x = getRandonNumber(0,width - size)
    const y = getRandonNumber(0,height - size)

    

    circle.classList.add('circle')
    circle.addEventListener('click', () => {
        setColor(circle)
    })

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)

    

}

function getRandonNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(e) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    
}


function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
    
}
