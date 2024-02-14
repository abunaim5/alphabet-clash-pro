function addElementsClassById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    // console.log(element)
}

function removeElementsClassById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomNumber() {
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArr = alphabetStr.split('');

    // set inner text by id
    const element = document.getElementById('show-alphabet');

    // generate random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    element.innerText = alphabetArr[index];
}