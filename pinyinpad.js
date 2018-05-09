const container = document.getElementById('cotnainer');
const doc = document.getElementById('doc');

const sense = new Sense(cotnainer);
document.addEventListener('input', inputHandler);
document.addEventListener('keydown', keyDownHandler);
doc.focus();
// 'lu' words with umlaut
// need to add support for umlaut characters
function keyDownHandler(event) {
    console.log(event);
    const { key, ctrlKey, altKey, shiftKey } = event;
    if (key === 'Tab') {
        event.preventDefault();
        if (sense.visible) {
            const selection = sense.currentSuggestion;
            pad.replaceCurrentWord(selection);
            sense.clearSuggestions();
            sense.hide();
        }
        else {

        }
    }
    else if (key === 'Backspace') {
        // event.preventDefault();
        const prevent = preventDeleteLastLine();
        if (prevent) event.preventDefault();
    }
    else if (key === 'Enter') {
        if (sense.visible) {
            event.preventDefault();
            const selection = sense.currentSuggestion;
            pad.replaceCurrentWord(selection);
            sense.clearSuggestions();
            sense.hide();
        }
        else {

        }
    }
    else if (key === 'ArrowDown') {
        if (!sense.visible) return;
        event.preventDefault();
        sense.selectNext();
    }
    else if (key === 'ArrowUp') {
        if (!sense.visible) return;
        event.preventDefault();
        sense.selectPrevious();
    }
    else if (key === 'ArrowLeft') {

        if (!sense.visible) return;
        let word = pad.getCurrentWord();
        let char = pad.getNextCharacter(-1);
        if (char === ' ') {
            sense.clearSuggestions();
            sense.hide();
        }
    }
    else if (key === 'ArrowRight') {
        if (!sense.visible) return;
        const char = pad.getPreviousCharacter(+1);
        if (char.charCodeAt(0) === 160) {
            sense.clearSuggestions();
            sense.hide();
        }
    }
    else if (key === 'Escape') {
        if (sense.visible) {
            sense.clearSuggestions();
            sense.hide();
        }
    }
    else if(key === ' ' && ctrlKey){
        console.log('test');
        predictText()
    }
}

function inputHandler(event) {
    console.log(event);
    const { data, inputType } = event;
    const ceret = pad.getCeretPosition();
    if (inputType === 'insertText') {
        textInputHander(event);
    }
    else if (inputType === 'deleteContentBackward') {
        textInputHander(event);
    }
    else if (inputType === 'deleteContentForward') {
        textInputHander(event);
    }
}


function modifierHandler(e) {

}

function textInputHander(e) {
    const { data } = e;
    if (!isNaN(data)) {
        const num = parseInt(data);
        if (num > 0 || num < 10) {
            const char = pad.getPreviousCharacter(-1);
            const tone = zidian.addTone(char, data);
            if (!!tone) pad.replacePreviousCharacter(tone);
        }
    }
    predictText();
}

function actionInputHandler(e) {

}



function predictText() {
    let currentWord = pad.getCurrentWord();
    if (!!!currentWord) {
        sense.hide();
        return;
    }
    currentWord = currentWord.trim();
    const suggestions = zidian.startsWith(currentWord);
    if (suggestions.length < 1) {
        sense.clearSuggestions();
        sense.hide();
        return;
    }
    const wordSet = [];
    const { x, y } = calculateCeretOffset();
    if (zidian.containsTones(currentWord)) {
        let tonedWords = zidian.startsWith2(currentWord);
        const list = tonedWords.sort(zidian.sortLengthFirst);
        list.forEach(element => {
            const test = wordSet.find(x => x.word === element.word);
            if (!!!test) wordSet.push(element);
        });
    }
    const sugs = suggestions.sort(zidian.sortLengthFirst);
    sugs.forEach(x => {
        const test = wordSet.find(w => w.word === x.word);
        if (!!!test) wordSet.push(x);
    });
    sense.setSuggestions(wordSet);
    sense.show(x, y);
}

function calculateCeretOffset() {
    const { scrollLeft, scrollTop } = doc;
    const box = doc.getBoundingClientRect()
    const ceret = pad.getCeretPosition();
    return {
        x: ceret.x + scrollLeft,
        y: ceret.y + scrollTop - box.top
    };
}

function preventDeleteLastLine() {
    const lines = doc.children;
    if (lines.length > 1) return false;
    if (lines[0].textContent.length > 0) return false;
    return true;

}