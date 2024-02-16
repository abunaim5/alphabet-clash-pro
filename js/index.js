// keyboard event
function handleKeyboardEventByKeys(e) {
    const keyboardKey = e.key;
    const currentAlphabet = getElementsInnerTextById('current-alphabet');
    if (keyboardKey === currentAlphabet) {
        const currentScore = getElementsValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementsInnerTextById('current-score', updatedScore);
        removeElementBgColorById(currentAlphabet);
        continueGame();
    }
    else {
        const lifeScore = getElementsValueById('life-score');
        const availableLife = lifeScore - 1;
        setElementsInnerTextById('life-score', availableLife);
        if (availableLife === 0) {
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardEventByKeys);

// home screen
function playNow() {
    addElementsClassById('home-screen');
    addElementsClassById('score-board');
    removeElementsClassById('playground-screen');
    continueGame();
    setElementsInnerTextById('life-score', 5);
    setElementsInnerTextById('current-score', 0);
}

// playground screen
function continueGame() {
    // generate random index number
    const index = getRandomNumber();
    const alphabet = showAlphabetByIndex(index);
    console.log(alphabet);
    setElementsInnerTextById('current-alphabet', alphabet);
    setElementBgColorById(alphabet);
}

// game over screen
function gameOver() {
    addElementsClassById('home-screen');
    addElementsClassById('playground-screen');
    removeElementsClassById('score-board');
    const currentAlphabet = getElementsInnerTextById('current-alphabet');
    removeElementBgColorById(currentAlphabet);
}