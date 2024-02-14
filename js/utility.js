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
// set elements inner text by Id
function setElementsInnerTextById(elementId, alphabet) {
    const element = document.getElementById(elementId);
    element.innerText = alphabet;
}
// change elements background color by Id
function setElementBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}