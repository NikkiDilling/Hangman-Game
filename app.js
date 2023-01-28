
//Variables

//Array with words to guess
const wordContainer = document.querySelector(".word-container");
const words = ["APPLE", "COMPUTER", "BLANKET", "SHOWERCURTAIN"];
const alphabet = document.querySelector('.alphabet-container');

let letterArray = [];
let randomNumber = Math.floor((Math.random() * (3 - 0 + 1)) + 0);
let wordToGuess = words[randomNumber];

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


alphabet.addEventListener('click', function(e){

    console.log(e.target.innerText + " is pressed");

    if(letterArray.includes(`${e.target.innerText}`)){
        console.log(`letter ${e.target.innerText} exists`);
        console.log("index of letter: " + letterArray.indexOf(`${e.target.innerText}`));

        //saving letters that are placed in the upper container to an array
        let lettersToGuess = document.querySelectorAll(".letter");
        console.log(lettersToGuess[0]);

        for(let i=0; i < lettersToGuess.length; i++){

            console.log("inside for loop");

            if(i === letterArray.indexOf(`${e.target.innerText}`)){
                lettersToGuess[i].innerText = e.target.innerText;
                console.log('letter is placed');
            }
        }

    }else{
        console.log(`letter ${e.target.innerText} does not exist`);
    }
});


 

setWord();
fillArray();




