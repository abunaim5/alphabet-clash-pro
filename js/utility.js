// add elements Class by elements Id
function addElementsClassById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// remove elements Class by elements Id
function removeElementsClassById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// generate random number
function getRandomNumber() {
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    return index;
}

// display alphabet by generated random number as index
function showAlphabetByIndex(index) {
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArr = alphabetStr.split('');
    const alphabet = alphabetArr[index];
    return alphabet;
}

// get element inner text by id
function getElementsInnerTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const convertedText = elementText.toLowerCase();
    return convertedText;
}

// set elements inner text by Id
function setElementsInnerTextById(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}

// get elements value by id
function getElementsValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

// set elements background color by Id
function setElementBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove elements background color by id
function removeElementBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

