"use strict"
const pad = (function () {

    const api = {
        replacePreviousCharacter(char) {
            const selection = getSelection();
            const { focusNode, focusOffset } = selection;
            const startText = focusNode.textContent.slice(0, focusOffset - 2);
            const endText = focusNode.textContent.slice(focusOffset);
            focusNode.textContent = `${startText}${char}${endText}`;
            selection.collapse(focusNode, focusOffset - 1);
        },
        replaceCurrentWord(word) {
            const selection = getSelection();
            const range = selection.getRangeAt(0);
            selection.modify("move", "backward", "word");
            selection.modify("extend", "forward", "word");
            let selWord = selection.toString();
            const lastChar = selWord.split('').pop();
            if (lastChar === ' ') {
                selection.modify('extend', 'backward', 'character');
                selWord = selection.toString();
            }
            const range2 = selection.getRangeAt(0);
            range2.deleteContents();
            range2.insertNode(document.createTextNode(word));
            range2.collapse();
        },
        getPreviousCharacter(offset = 0) {
            const selection = getSelection();
            const { focusNode, focusOffset } = selection;
            const char = focusNode.textContent.slice(focusOffset - 1 + offset, focusOffset + offset);
            return char;
        },
        getNextCharacter(offset = 0) {
            const selection = getSelection();
            const { focusNode, focusOffset } = selection;
            const char = focusNode.textContent.slice(focusOffset + offset, focusOffset + 1 + offset);
            return char;
        },
        getCurrentWord() {
            const previousChar = api.getPreviousCharacter().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            if (!!!previousChar.match(/[a-za-zÀ-ÿ]/i)) return false;
            const selection = getSelection();
            const range = selection.getRangeAt(0);
            selection.modify("move", "backward", "word");
            selection.modify("extend", "forward", "word");
            let word = selection.toString();
            const lastChar = word.split('').pop();
            if (lastChar === ' ') {
                selection.modify('extend', 'backward', 'character');
                word = selection.toString();
            }
            // TODO: add support for words with ' 
            selection.removeAllRanges();
            selection.addRange(range);
            return word;
        },
        getCeretPosition() {
            const selection = getSelection();
            const range = selection.getRangeAt(0);
            const ceret = range.getBoundingClientRect();
            return ceret;
        }
    }

    return api;
})();