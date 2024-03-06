// create audio
const audio = new Audio();
let isClickedPlayNow = false;
let isHomeScreen = true;

const playScreen = document.getElementById('play-screen');
// keyboard event
function handleKeyboardEventByKeys(e) {
    handleEscapeAndEnter(e.key);
    if (!isClickedPlayNow) return;
    const keyboardKey = e.key;
    const currentAlphabet = getElementsInnerTextById('current-alphabet');
    if (keyboardKey !== "Enter")
        if (keyboardKey === currentAlphabet) {
            audio.src = "../audios/short-success-sound.mp3";
            audio.play();

            const currentScore = getElementsValueById('current-score');
            const updatedScore = currentScore + 1;
            setElementsInnerTextById('current-score', updatedScore);
            removeElementBgColorById(currentAlphabet);
            continueGame();
        }
        else {
            audio.src = "../audios/failure-drum-sound-effect.mp3";
            audio.play();

            const lifeScore = getElementsValueById('life-score');
            const availableLife = lifeScore - 1;
            let lifePercent = availableLife / 5 * 100;
            playScreen.style.background = `linear-gradient(#FFFFFFB3 ${lifePercent}%, #880808B3)`;
            setElementsInnerTextById('life-score', availableLife);
            if (availableLife === 0) {
                gameOver();
            }
        }
};
let isContinueGame = false;
let isGameOver = true;
const handleEscapeAndEnter = (keyboardKey) => {
    if (!isContinueGame) {
        if (keyboardKey === 'Enter' && isHomeScreen) {
            isClickedPlayNow = true;
            playNow();
        }
    }
    if (isGameOver) {
        if (keyboardKey === 'Escape') {
            gameOver();
        }
    }
};

document.addEventListener('keyup', handleKeyboardEventByKeys);

// home screen
function playNow() {
    addElementsClassById('home-screen');
    addElementsClassById('score-board');
    removeElementsClassById('playground-screen');
    continueGame();
    setElementsInnerTextById('life-score', 5);
    setElementsInnerTextById('current-score', 0);
    playScreen.style.background = '';
    audio.src = "../audios/open-and-closed-door.mp3";
    audio.play();
    isClickedPlayNow = true;
    isContinueGame = true;
    isGameOver = true;
};

// playground screen
function continueGame() {
    // generate random index number
    const index = getRandomNumber();
    const alphabet = showAlphabetByIndex(index);
    setElementsInnerTextById('current-alphabet', alphabet);
    setElementBgColorById(alphabet);
};

// game over screen
function gameOver() {
    addElementsClassById('home-screen');
    addElementsClassById('playground-screen');
    removeElementsClassById('score-board');
    const currentAlphabet = getElementsInnerTextById('current-alphabet');
    removeElementBgColorById(currentAlphabet);
    const currentScore = getElementsInnerTextById('current-score');
    setElementsInnerTextById('final-score', currentScore);
    audio.src = "../audios/game-death-sound.mp3";
    audio.play();
    isClickedPlayNow = false;
    isContinueGame = false;
    isGameOver = false;
};