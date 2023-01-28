
//Variables

//Array with words to guess
const wordContainer = document.querySelector(".word-container");
const words = ["APPLE", "COMPUTER", "BLANKET", "SHOWERCURTAIN"];
const alphabet = document.querySelector('.alphabet');

let letterArray = [];
let randomNumber = Math.floor((Math.random() * (3 - 0 + 1)) + 0);


function setWord(){

    console.log("waiting");
    console.log("word: " + Math.floor((Math.random() * (4 - 0 + 1)) + 0));

    
    console.log("word length: " + words[randomNumber].length + " word: " + words[randomNumber]);
    console.log(words[randomNumber][0]);

    for(i=0; i < words[randomNumber].length; i++){
        
        
        let letter = document.createElement('div');
        letter.classList.add('letter');
        wordContainer.appendChild(letter);
        
        //console.log(i +"th letter created");

    }
}

function fillArray(){

    for(i=0; i < words[randomNumber].length; i++){
        letterArray.push(words[randomNumber][i]);
    }
    console.log(letterArray);
}

/*
alphabet.addEventListener('click', function(e){

    letter.some(element => {
        if (element.id === 1) {
          return true;
        }
      
        return false;
      });
})
 */
   
setWord();
fillArray();


