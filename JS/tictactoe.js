//------------------------------------VARS------------------------------------//
let slots = ["", "", "", "", "", "", "", "", ""]
let turns = 0
let maxTurn = 9

let circles =  [document.getElementById('circle1'), 
                document.getElementById('circle2'),
                document.getElementById('circle3'), 
                document.getElementById('circle4'), 
                document.getElementById('circle5'), 
                document.getElementById('circle6'), 
                document.getElementById('circle7'), 
                document.getElementById('circle8'), 
                document.getElementById('circle9')]

let theXes  =  [document.getElementById('theX1'), 
                document.getElementById('theX2'),
                document.getElementById('theX3'), 
                document.getElementById('theX4'), 
                document.getElementById('theX5'), 
                document.getElementById('theX6'), 
                document.getElementById('theX7'), 
                document.getElementById('theX8'), 
                document.getElementById('theX9')]

                
let squares =  [document.getElementById('square1'), 
                document.getElementById('square2'),
                document.getElementById('square3'), 
                document.getElementById('square4'), 
                document.getElementById('square5'), 
                document.getElementById('square6'), 
                document.getElementById('square7'), 
                document.getElementById('square8'), 
                document.getElementById('square9')]

let victory = document.getElementById('win')
let victoryTxt = document.getElementById('title')
let replay = document.getElementById('replay')

//------------------------------------VARS------------------------------------//
//---------------------------------FUNCTIONS----------------------------------//
function winO() {
    victory.style.top = '0rem'
    victory.style.transition = '.5s'
    victoryTxt.textContent = 'O wins!'
}
function winX() {
    victory.style.top = '0rem'
    victory.style.transition = '.5s'
    victoryTxt.textContent = 'X wins!'
}

function draw() {
    victory.style.top = '0rem'
    victory.style.transition = '.5s'
    victoryTxt.textContent = 'Draw!'
}
function checker(){
    let timer = setInterval(() => {
        switch(true){
            case victory.style.top == 'Orem':
                clearInterval(timer)
                break
            // "O"s
                // Horizontal
                case slots[0] == 'O' && slots[3] == 'O' && slots[6] == 'O':
                    winO()
                    break
                case slots[1] == 'O' && slots[4] == 'O' && slots[7] == 'O':
                    winO()
                    break
                case slots[2] == 'O' && slots[5] == 'O' && slots[8] == 'O':
                    winO()
                    break
                // Horizontal

                // Vertical
                case slots[0] == 'O' && slots[1] == 'O' && slots[2] == 'O':
                    winO()
                    break
                case slots[3] == 'O' && slots[4] == 'O' && slots[5] == 'O':
                    winO()
                    break
                case slots[6] == 'O' && slots[7] == 'O' && slots[8] == 'O':
                    winO()
                    break
                // Vertical

                // Diagonal
                case slots[0] == 'O' && slots[4] == 'O' && slots[8] == 'O':
                    winO()
                    break
                case slots[2] == 'O' && slots[4] == 'O' && slots[6] == 'O':
                    winO()
                    break
                // Diagonal
            // "O"s

            // "X"s
                // Horizontal
                case slots[0] == 'X' && slots[3] == 'X' && slots[6] == 'X':
                    winX()
                    break
                case slots[1] == 'X' && slots[4] == 'X' && slots[7] == 'X':
                    winX()
                    break
                case slots[2] == 'X' && slots[5] == 'X' && slots[8] == 'X':
                    winX()
                    break
                // Horizontal

                // Vertical
                case slots[0] == 'X' && slots[1] == 'X' && slots[2] == 'X':
                    winX()
                    break
                case slots[3] == 'X' && slots[4] == 'X' && slots[5] == 'X':
                    winX()
                    break
                case slots[6] == 'X' && slots[7] == 'X' && slots[8] == 'X':
                    winX()
                    break
                // Vertical

                // Diagonal
                case slots[0] == 'X' && slots[4] == 'X' && slots[8] == 'X':
                    winX()
                    break
                case slots[2] == 'X' && slots[4] == 'X' && slots[6] == 'X':
                    winX()
                    break
                // Diagonal
            // "X"s

            // Draw
            case turns == maxTurn:
                draw()
                break
            // Draw
        }
    }, 100);
        
}
//---------------------------------FUNCTIONS----------------------------------//
//--------------------------------HOVER EFFECT--------------------------------//
for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseenter', () => {
        switch(true) {
            case turns % 2 == 0 && slots[i].length == 0 && circles[i].style.opacity == 0: /*&& theXes[i].style.opacity != 1:*/
                circles[i].style.opacity = 0.4
                break
            case turns % 2 != 0 && slots[i].length == 0 && theXes[i].style.opacity == 0: /*&& circles[i].style.opacity != 1:*/
                theXes[i].style.opacity = 0.4
                break
            }
        }
    )

    squares[i].addEventListener('mouseleave', () => {
        switch(true) {
            case turns % 2 == 0 && slots[i].length == 0 && circles[i].style.opacity == 0.4: /*&& theXes[i].style.opacity != 1:*/
                circles[i].style.opacity = 0
                break
            case turns % 2 != 0 && slots[i].length == 0 && theXes[i].style.opacity == 0.4: /*&& circles[i].style.opacity != 1:*/
                theXes[i].style.opacity = 0
                break
            }
        }
    )

    squares[i].addEventListener('click', () => {
        switch(true) {
            case turns % 2 == 0 && slots[i].length == 0: /*circles[i].style.opacity == 0.4 && theXes[i].style.opacity != 1:*/ 
                circles[i].style.opacity = 1
                slots[i] = 'O'
                turns++
                break
            case turns % 2 != 0 && slots[i].length == 0: /*theXes[i].style.opacity == 0.4 && circles[i].style.opacity != 1:*/ 
                theXes[i].style.opacity = 1
                slots[i] = 'X'
                turns++
                break
            }
        }
    )
}
//--------------------------------HOVER EFFECT--------------------------------//
//---------------------------------PLAY AGAIN---------------------------------//
replay.addEventListener("click", () => {
    victory.style.top = "100rem"
    slots = ["", "", "", "", "", "", "", "", ""]
    maxTurn = turns + 9
    
    for (let i = 0; i < slots.length; i++){
        circles[i].style.opacity = 0
        theXes[i].style.opacity = 0
    }

    checker()
})
checker()
//---------------------------------PLAY AGAIN---------------------------------//