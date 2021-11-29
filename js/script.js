const width = 28
const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")
let squares = []
let score = 0
const btnUp = document.getElementById("btn-up")
const btnDown = document.getElementById("btn-down")
const btnLeft = document.getElementById("btn-left")
const btnRight = document.getElementById("btn-right")

//28 * 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

// create board
function createBoard() {
    for (let i = 0; i < layout.length; i++ ) {
        // create a square
        const square = document.createElement('div')
        // put square in grid
        grid.appendChild(square)
        // put square in squares array
        squares.push(square)
        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } 
        else if (layout[i] === 1){
            squares[i].classList.add("wall")
        }
        else if (layout[i] === 3){
            squares[i].classList.add("power-pellet")
        }
        else  if (layout[i] === 4){
            squares[i].classList.add("empty")
        }
        else if (layout[i] === 2){
            squares[i].classList.add("ghost-lair")
        }
    }
}

createBoard()


//starting position of pacman 
let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pacman')
// reacting to touchpad input 
  
  // reacting to keyboard input  
    function control(e){
        squares[pacmanCurrentIndex].classList.remove('pacman')
            switch (e.key ) {

            case "ArrowDown"  :

                  
                
                if( !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    
                    pacmanCurrentIndex + 28 < 28  * 28   )
                    {
                    pacmanCurrentIndex +=28
                    squares[pacmanCurrentIndex].style.transform= "rotate(90deg)"
                   }
                
                break;
            
            case "ArrowUp":
               
                if( !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    pacmanCurrentIndex - 28 >= 0   )
                    {
                    pacmanCurrentIndex -=28
                    squares[pacmanCurrentIndex].style.transform= "rotate(270deg)"
                   }
                
                break;
          
            case "ArrowLeft":
                if(
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    pacmanCurrentIndex % width  !==0 ) {
                    pacmanCurrentIndex -=1
                    squares[pacmanCurrentIndex].style.transform= "rotate(180deg)"
                    
                    
                    
                } if (pacmanCurrentIndex === 364 ){
                    pacmanCurrentIndex = 391
                }
                break;
         
            case "ArrowRight":
                if( !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    pacmanCurrentIndex % width  < width -1  ){
                    pacmanCurrentIndex +=1
                    squares[pacmanCurrentIndex].style.transform= "rotate(0deg)"
                   
                }if (pacmanCurrentIndex === 391 ){
                    pacmanCurrentIndex = 364}
                break;
            case "Enter":
                // Do something for "enter" or "return" key press.
                break;
           
            case "Escape":
                // Do something for "esc" key press.
                break;
            default:
                return; // Quit when this doesn't handle the key event.
            }
        
            // Cancel the default action to avoid it being handled twice
            e.preventDefault();
            squares[pacmanCurrentIndex].classList.add('pacman')
            
            eatPacDots()
            powerPelletEaten()
            
            
    }
     document.addEventListener("keyup",control)
// eating the dots and adding score
    function eatPacDots(){
        if ( squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        score++
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        scoreDisplay.innerHTML = score
        }

    }

function powerPelletEaten() {
    //if square pacman is in contains a power pellet
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        //removing power-pellet class
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        //add a score of 10
        score +=10
        //change each of the four ghosts to isScared
        ghosts.forEach(ghost => ghost.isScared = true)
        //use setTimeout to unscare ghosts after 10 seconds     
        setTimeout(unScareGhosts, 100000)   
        }
}

function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

    
 // creating a classes and construtor method
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }
    
     const ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]
    // drawing the ghost on the grid
ghosts.forEach(ghost => {
     squares[ghost.currentIndex].classList.add(ghost.className)
     squares[ghost.currentIndex].classList.add('ghost')
})
   
//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
 
    ghost.timerId = setInterval(function() {
        
        //remove any ghost
        squares[ghost.currentIndex].classList.remove('scared')
        //start conditional if there are no wall and other ghost
        if( !squares[ghost.currentIndex + direction ].classList.contains('wall')  && !squares[ghost.currentIndex + direction].classList.contains('ghost')){ 
               squares[ghost.currentIndex].classList.remove(ghost.className)
               squares[ghost.currentIndex].classList.remove('ghost')
        //add direction to current Index
                 ghost.currentIndex += direction
        //add ghost class
                 squares[ghost.currentIndex].classList.add(ghost.className)
                 squares[ghost.currentIndex].classList.add('ghost')
                }else  direction = directions[Math.floor(Math.random()* directions.length)]


                // if ghost is scared
           
            if (ghost.isScared){
                squares[ghost.currentIndex].classList.add('scared')
                

            }
            
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman') && squares[pacmanCurrentIndex].classList.contains('ghost') ) {
                //remove classnames - ghost.className, 'ghost', 'scared-ghost'
                ghosts.speed-=50
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared')
                // change ghosts currentIndex back to its startIndex
                ghost.currentIndex = ghost.startIndex
                //add a score of 100
                
                //re-add classnames of ghost.className and 'ghost' to the ghosts new postion  
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                score+= 100
                scoreDisplay.innerHTML = score
            }
            checkForGameOver()
            checkForWin()
    }, ghost.speed )

 
}
 //check for game over
 function checkForGameOver() {
    //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost 
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') && 
        !squares[pacmanCurrentIndex].classList.contains('scared') 
     ) {
     //for each ghost - we need to stop it moving
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    //remove eventlistener from our control function
    document.removeEventListener('keyup', control)
    //tell user the game is over    
    scoreDisplay.innerHTML = score  += " GAME OVER"
    
     }

}
function checkForWin(){
if( score >= 234){
 //for each ghost - we need to stop it moving
 ghosts.forEach(ghost => clearInterval(ghost.timerId))
 //remove eventlistener from our control function
 document.removeEventListener('keyup', control)
 //tell user the game is over    
 scoreDisplay.innerHTML = score  += " You have won"

}


}

function btnUpPressed(){
    squares[pacmanCurrentIndex].classList.remove('pacman')
    if( !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
    pacmanCurrentIndex - 28 >= 0   )
    {
    pacmanCurrentIndex -=28
    squares[pacmanCurrentIndex].style.transform= "rotate(270deg)"
   }
   squares[pacmanCurrentIndex].classList.add('pacman')
            
   eatPacDots()
   powerPelletEaten()

}

function btnDownPressed(){   
    squares[pacmanCurrentIndex].classList.remove('pacman')
    if( !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') && !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
        
        pacmanCurrentIndex + 28 < 28  * 28   )
        {
        pacmanCurrentIndex +=28
        squares[pacmanCurrentIndex].style.transform= "rotate(90deg)"
       }
       squares[pacmanCurrentIndex].classList.add('pacman')
            
       eatPacDots()
       powerPelletEaten()
       
    } 

function btnLeftPressed(){
    squares[pacmanCurrentIndex].classList.remove('pacman')
    if(
        !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
        pacmanCurrentIndex % width  !==0 ) {
        pacmanCurrentIndex -=1
        squares[pacmanCurrentIndex].style.transform= "rotate(180deg)"
        
        
        
    } if (pacmanCurrentIndex === 364 ){
        pacmanCurrentIndex = 391
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
            
    eatPacDots()
    powerPelletEaten()
}

function btnRightPressed(){
    squares[pacmanCurrentIndex].classList.remove('pacman')
    if( !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
    pacmanCurrentIndex % width  < width -1  ){
    pacmanCurrentIndex +=1
    squares[pacmanCurrentIndex].style.transform= "rotate(0deg)"
   
}if (pacmanCurrentIndex === 391 ){
    pacmanCurrentIndex = 364}

    squares[pacmanCurrentIndex].classList.add('pacman')
            
    eatPacDots()
    powerPelletEaten()
}
