
////////////////////////Variables

//appending new letter elements here (to guess)
const wordContainer = document.querySelector(".word-container"); 
//Array with words to guess
const words = ["APPLE", "COMPUTER", "BLANKET", "SHOWERCURTAIN"];
//Container for alphabet letters to use with event listener onclick
const alphabet = document.querySelectorAll('.alphabet-letter');
//Variable for displaying number of mistakes to the player
let mistakeCountDisplay = document.querySelector('.mistakes-count-num');
let gameStatusContainer = document.querySelector('.game-win-lose');
let gameOverInfo = document.querySelector('.game-over');
let gameWinInfo = document.querySelector('.game-win');
let guessedCounter = 0;

let mistakeCount = 0;

//Generating random number to use as indexes to words[]
let randomNumber = Math.floor((Math.random() * (3 - 0 + 1)) + 0);
//Picking the word for the user to guess
let wordToGuess = words[randomNumber];
//Array to save the indexes of all occurrences of a letter in a word
let letterArrayIndexes = [];


function setWord(){

    console.log("word: " + Math.floor((Math.random() * (4 - 0 + 1)) + 0));
    console.log("word length: " + wordToGuess.length + "  word: " + wordToGuess);

    for(i=0; i < wordToGuess.length; i++){
        
        
        let letter = document.createElement('div');
        letter.classList.add('letter');
        wordContainer.appendChild(letter);
        
        //console.log(i +"th letter created");

    }
}


//Function that makes the hangman drawing element visible based on the mistake count
function showHangman(){

    switch(mistakeCount){
        case 1: 
                document.querySelector('.bottom-line').style.display = 'block';
                break;
        case 2: 
                document.querySelector('.horizontal-line').style.display = 'block';
                break;
        case 3:
                document.querySelector('.vertical-line').style.display = 'block';
                break;
        case 4:
                document.querySelector('.binding-line').style.display = 'block';
                break;
        case 5:
                document.querySelector('.rope').style.display = 'block';
                break;         
        case 6:
                document.querySelector('.head').style.display = 'block';
                break;
        case 7:
                document.querySelector('.body').style.display = 'block';
                break;
        case 8:
                document.querySelector('.left-arm').style.display = 'block';
                break; 
        case 9:
                document.querySelector('.right-arm').style.display = 'block';
                break;
        case 10:
                document.querySelector('.left-leg').style.display = 'block';
                break;
        case 11:
                document.querySelector('.right-leg').style.display = 'block';

                
    }

    //For debugging
    //console.log("(f)mistake count: " + mistakeCount);

}

//adding event listener to all alphabet letters individually
alphabet.forEach(e => {
    e.addEventListener('click',function guessLetter(e){

        //For debugging
        //console.log(e.target.innerText + " is pressed");
    
        if(wordToGuess.includes(`${e.target.innerText}`)){
    
            /* For Debugging
            console.log(`letter ${e.target.innerText} exists`);
            console.log("index of letter: " + wordToGuess.indexOf(`${e.target.innerText}`));
            */
    
            //saving letter elements that are placed in the word-container to an array
            let lettersToGuess = document.querySelectorAll(".letter");
    
            //saving indexes of all occurences of the letter that is clicked into an array
            for(let i = 0; i < wordToGuess.length; i++){
    
                if(wordToGuess[i] === `${e.target.innerText}`){
                    letterArrayIndexes.push(i);
                }
            }
    
            //Checking indexes of letters and revealing letters of the word to the player
            //outer loop going through indexes
            for(let i=0; i < letterArrayIndexes.length; i++){
    
                //inner loop going through the letter elements in the word-container
                for(let j = 0; j < lettersToGuess.length; j++){
    
                    if(j === letterArrayIndexes[i]){
                        lettersToGuess[j].innerText = e.target.innerText;
                        console.log('letter is placed at: ' + j);
                        //increasing guessed counter
                        guessedCounter++;

                        if(guessedCounter === wordToGuess.length){
                            gameWinInfo.style.display = 'inline-block';
                        }
                    }
                }
    
            }
    
            letterArrayIndexes = []; //emptying the index array 
    
        }else{
            console.log(`letter ${e.target.innerText} does not exist`);
    
            //updating mistake count
            mistakeCount++;
   
            //function that displays the hangman drawing when a mistake is made
            showHangman();
                                    
            //Updating mistake count visually 
            if(mistakeCount <= 11){
                mistakeCountDisplay.innerText = `${11-mistakeCount}`;
                
                //checking mistake count to display "Game Over" element
                if(mistakeCount === 11){
                    gameOverInfo.style.display = 'inline-block';
                }
            }

        }
        
        //visibly setting the element to be inactive
        e.target.classList.add('inactive');
         //removing event listener
         e.target.removeEventListener('click',guessLetter);
        
    })
});



//Calling function that creates letter elements
setWord();




