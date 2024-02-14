function playNow() {
    addElementsClassById('home-screen');

    removeElementsClassById('playground-screen');

    const index = getRandomNumber();

    const alphabet = showAlphabetByIndex(index);

    setElementsInnerTextById('show-alphabet', alphabet);

    setElementBgColorById(alphabet);
}