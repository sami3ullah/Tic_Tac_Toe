
// this array will hold the number of player, and we will determine the win on the basis of this array
var numbers = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

// this array will hold all the winning positions
var winningPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// generate a random b/w 0 and 1
var player = Math.floor(Math.random() * 2 + 0);

var tac = document.getElementsByClassName("tac");

// Gradient color
var gradientColor = "linear-gradient(to right bottom, #8255eba8, #7752e7af, #6c4fe2a4, #634ddeaf, #564ad9b4, #4f46d4b4, #4843cfb2, #3f3fcab6, #3a3ac3b9, #3535bdb7, #3030b6bb, #2b2bb0be)";

var whoWin = document.getElementsByClassName("mainText")[0];

var playerRed = document.getElementsByClassName("playerRedScore")[0];

var playerYellow = document.getElementsByClassName("playerYellowScore")[0];

// check is the game active
var gameActive = true;

function clickedDiv(number){


    if(gameActive == true){

        if(player == 0){
            
            numbers[number] = player;
            tac[number].src = "red.png";
            tac[number].style.display = "block";
            player = 1;
        }else{
            
            numbers[number] = player;
            tac[number].src = "yellow.png";
            tac[number].style.display = "block";
            player = 0;
        }

        // check if any player won
        for(x = 0; x < winningPositions.length; x++){
            pos = winningPositions[x]
            
            
            if(numbers[pos[0]] == numbers[pos[1]] && numbers[pos[1]] == numbers[pos[2]] && numbers[pos[0]] != -1){
                
                if(numbers[pos[0]] == 0){
                    whoWin.style.WebkitTransitionDuration = "1s";
                    whoWin.style.WebkitTransform = "rotate(720deg)";
                    whoWin.innerHTML = "Red has won!";
                    playerRed.innerHTML = parseInt(playerRed.innerHTML) + 1;
                    gameActive = false;
                }else{
                    whoWin.style.WebkitTransitionDuration = "1s";
                    whoWin.style.WebkitTransform = "rotate(720deg)";
                    whoWin.innerHTML = "Yellow has won!";
                    playerYellow.innerHTML = parseInt(playerYellow.innerHTML) + 1;
                    gameActive = false;
                }

            }
        }
        
        // check if there's a draw
         if(!numbers.includes(-1) && gameActive == true){
             gameActive = false;
             whoWin.innerHTML = "It's a draw!"
             
        }

    }  
    
}

function reset(){
     for(x=0; x<tac.length; x++){
         tac[x].style.display = "none";
     }

     gameActive = true;

     player = Math.floor(Math.random() * 2 + 0);

    numbers = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

    // change the color back to gradient
    whoWin.style.backgroundImage = gradientColor;
    console.log(numbers);
} 
