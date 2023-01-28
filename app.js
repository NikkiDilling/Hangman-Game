
//Variables

//Array with words to guess
const wordContainer = document.querySelector(".word-container");
const words = ["APPLE", "COMPUTER", "BLANKET", "SHOWERCURTAIN"];
const alphabet = document.querySelector('.alphabet-container');
let mistakeCountDisplay = document.querySelector('.mistakes-count-num');

let letterArray = [];
let letterArrayIndexes = [];
let randomNumber = Math.floor((Math.random() * (3 - 0 + 1)) + 0);
let wordToGuess = words[randomNumber];

let mistakeCount = 0;

function removeProperty() {
    element =
    document.styleSheets[0].cssRules[0].style;
    element.removeProperty('text-decoration');
}

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



function fillArray(){

    for(i=0; i < wordToGuess.length; i++){
        letterArray.push(wordToGuess[i]);
    }
    console.log(letterArray);
}

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
    console.log("(f)mistake count: " + mistakeCount);
    mistakeCountDisplay.innerText = `${mistakeCount}`;
}

alphabet.addEventListener('click', function(e){

    console.log(e.target.innerText + " is pressed");

    if(letterArray.includes(`${e.target.innerText}`)){

        console.log(`letter ${e.target.innerText} exists`);
        console.log("index of letter: " + letterArray.indexOf(`${e.target.innerText}`));

        //saving letters that are placed in the upper container to an array
        let lettersToGuess = document.querySelectorAll(".letter");
        console.log(lettersToGuess[0]);

        //saving indexes of all occurences of the letter that is clicked into an array
        for(let i = 0; i < letterArray.length; i++){
            if(letterArray[i] === `${e.target.innerText}`){
                letterArrayIndexes.push(i);
            }
        }

//Checking indexes of letters and revealing letters of the word to the player
        for(let i=0; i < letterArrayIndexes.length; i++){

            for(let j = 0; j < lettersToGuess.length; j++){

                if(j === letterArrayIndexes[i]){
                    lettersToGuess[j].innerText = e.target.innerText;
                    console.log('letter is placed at: ' + j);
                    
                }
            }

        }

        letterArrayIndexes = []; //emptying the index array

    }else{
        console.log(`letter ${e.target.innerText} does not exist`);

        mistakeCount++;
        //function that displays the hangman drawing when a mistake is made
        showHangman();
    }
});


 

setWord();
fillArray();




