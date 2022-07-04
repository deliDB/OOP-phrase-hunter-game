/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');
const buttons = document.querySelectorAll('.key');
const h1 = document.querySelector('h1');

//Event listener for the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
startButton.addEventListener('click', function() {
	game = new Game();
	resetGame();
	game.startGame();
});

/*
 * Resets gameboard between games.
 */

const resetGame = () => {
	const ul = document.querySelector('ul');
	const lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
	const h1Sibling = h1.nextElementSibling;

	ul.innerHTML = "";
	h1Sibling.innerHTML = "";
	startButton.innerText = 'Start Game';

	[...buttons].forEach(button => {
		button.disabled = '';
		button.className = 'key';
	});

	[...lostHearts].forEach(heart => {
		heart.attributes.src.textContent = 'images/liveHeart.png';
	});

};

//Event listener for each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. 
keyboard.addEventListener('click', (e) => {
	const button = e.target;
	if (button.tagName === 'BUTTON') {
		game.handleInteraction(button);
	}
});

document.addEventListener('keyup', (e) => {
	const key = e.key;
	const buttons = document.querySelectorAll('.key');
	if(overlay.style.display === 'none'){
		[...buttons].forEach(button => {
			if (button.innerText === key) {
				game.handleInteraction(button);
			}
		});
	}
});