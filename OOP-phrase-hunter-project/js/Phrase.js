/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Handles the creation of phrases.

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

   //this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
   
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

    // reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
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
