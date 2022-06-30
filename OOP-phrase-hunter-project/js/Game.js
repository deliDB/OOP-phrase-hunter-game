/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Creates a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

class Game {
    constructor(){
        //used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
    
        this.phrases = [
            new Phrase('eat my shorts'),
            new Phrase('yesterday all my troubles seemed so far away'),
            new Phrase('never gonna give you up'),
            new Phrase('your love is a one in a million'),
            new Phrase('for a minute there I lost myself')
        ];

        //the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
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

//this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
// Disable the selected letter’s onscreen keyboard button.
// If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
// If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
    handleInteraction(){

    }

//this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
/**
 * <div id="scoreboard" class="section">
				<ol>
					<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
 */
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

    removeLife(){
        
    }

//this method checks to see if the player has revealed all of the letters in the active phrase.
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin(){
        this.activePhrase
    }

//this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(){

    }
}