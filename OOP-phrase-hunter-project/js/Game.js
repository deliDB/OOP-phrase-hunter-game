/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
* Creates a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
*/

class Game {
    constructor(){
        this.missed = 0;
    
        this.phrases = [
            new Phrase('Go Cubs Go'),
            new Phrase('Karma police'),
            new Phrase('Never gonna give you up'),
            new Phrase('Sun is shining'),
            new Phrase('For a minute there I lost myself') 
        ];
/**
* The Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
*/
        this.activePhrase = null;
    }

/**
* Initializes game by removing overlay, selecting a random phrase, and displaying the phrase with the letters hidden.
*/
    startGame(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

/**
* Randomly retrieves one of the phrases stored in the phrases array and returns it.
*/
    getRandomPhrase(){
         const randomNum = Math.floor(Math.random() *  this.phrases.length);
         return this.phrases[randomNum];
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button){
        button.disabled = true;
        if(this.activePhrase.checkLetter(button.innerText)){
            button.classList.add('chosen'); 
            this.activePhrase.showMatchedLetter(button.innerText);
            if(this.checkForWin()){
                this.gameOver(true);
            };
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

    removeLife(){
        const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
        liveHeart.attributes.src.textContent = 'images/lostHeart.png';
        
        if(this.missed < 4){
            this.missed++;
        } else {
            this.gameOver(false);
        }
    }

/**
* Checks for winning move, if player has revealed all of the letters in the active phrase.
* @return {boolean} True if game has been won, false if game wasn't won
*/
    checkForWin(){
        const hideElements = document.querySelectorAll('.hide');
        if(hideElements.length === 0){
            return true;
        } else {
            return false;
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){
        const h1 = document.querySelector('h1');
        const overlay = document.getElementById('overlay');

        overlay.style.display = '';

         if(gameWon === false){
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            overlay.classList.remove('win');
            h1.innerText = 'You got this, try again!';
        } else {
            overlay.classList.remove('start');
            overlay.classList.add('win');
            overlay.classList.remove('lose');
            h1.innerText = 'Way to go rockstar! You win!';
        }  
    }
}