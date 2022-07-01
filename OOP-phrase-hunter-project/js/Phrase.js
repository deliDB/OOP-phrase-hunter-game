/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * Handles the creation of phrases.
*/
class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

/**
 * Adds letter placeholders to the display when the game starts. 
*/
    addPhraseToDisplay(){
        const phraseArray = this.phrase.split('');
        const phraseUl = document.querySelector('#phrase ul');
        for(let i = 0; i < phraseArray.length; i++){
            if(phraseArray[i] === ' '){
                const li = document.createElement('li');
                li.className = 'space';
                phraseUl.appendChild(li);
                
            } else {
                const li = document.createElement('li');
                li.className = `hide letter ${phraseArray[i]} `;
                li.textContent = `${phraseArray[i]}`;
                phraseUl.appendChild(li);
            }
        }
    }

    
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter){
       if(this.phrase.includes(letter)){
            return true;
       } else {
           return false;
        }
    }    

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter){
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        //spread syntax used to convert matchedLetters from a NodeList to an array 
        [...matchedLetters].forEach(matchedLetter => {
            matchedLetter.classList.remove('hide');
            matchedLetter.classList.add('show');
        });
       
    }
}