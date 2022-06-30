/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//Creates a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.

const game = new Game();
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

//event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
startButton.addEventListener('click', function(){
    game.startGame();
});

//event listener for each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. 
keyboard.addEventListener('click', e => {
    const button = e.target;
    if(button === 'BUTTON'){
        game.handleInteraction();
    }
});
/************************* Test Area ***************************
    game.phrases.forEach((phrase, index) => {
        console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
    });

    const logPhrase = (phrase) => {
        console.log(`Phrase - phrase:`, phrase.phrase);
    };
    logPhrase(game.getRandomPhrase());

    game.getRandomPhrase().addPhraseToDisplay();

    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

**************************************************************/





/*
Resetting the gameboard between games.
After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
Remove all li elements from the Phrase ul element.
Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
*/ 