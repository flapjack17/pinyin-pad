"use strict"
class Sense {
    constructor(parentElement) {
        this.parent = parentElement;
        this.element = document.createElement('div');
        this.visible = false;
        this.offsetX = 0;
        this.offsetY = 15;
        this.suggestions = [];
        this.currentSuggestion = null;
        this.selectionIndex = null;

        this._suggestions = document.createElement('div');
        this._definitions = document.createElement('div');
        this._suggestions.classList.add('suggestions');
        this._definitions.classList.add('defs');

        this.element.classList.add('sense');
        this.element.classList.add('hide');

        this.element.appendChild(this._suggestions);
        this.element.appendChild(this._definitions);

        parentElement.appendChild(this.element);
    }
    setPosition(x, y) {
        const rect = this.element.getBoundingClientRect();
        const conRec = this.parent.getBoundingClientRect();
        let left = x + this.offsetX;
        let top = y + this.offsetY;
        if (left + 350 > window.innerWidth) left -= 350;
        if (top + rect.height >= conRec.height) top -= rect.height + 18; // need to change to adapt to line height
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
    show(x = null, y = null) {
        this.element.classList.remove('hide');
        this.visible = true;
        if (x !== null && y !== null) this.setPosition(x, y);
    }
    hide() {
        this.element.classList.add('hide');
        this.visible = false;
    }
    setSuggestions(words) {
        this.suggestions = words;
        const container = document.createElement('div');
        container.classList.add('suggestions');
        words.forEach((word, i) => {
            const div = document.createElement('div');
            div.dataset.index = i;
            div.textContent = word.word;
            container.appendChild(div);
            div.classList.add('suggestion');
            // if (i === 0) div.classList.add('selected');
        });
        this.selectionIndex = 0;
        this.currentSuggestion = this.suggestions[0].word;
        this.element.replaceChild(container, this._suggestions);
        this._suggestions = container;
        this._highlighSelection()
    }
    clearSuggestions() {
        const container = document.createElement('div');
        container.classList.add('suggestions');
        this.element.replaceChild(container, this._suggestions);
        this._suggestions = container;
        this.suggestions = [];
        this.selectionIndex = null;
        this.currentSuggestion = null;
    }
    selectNext() {
        this.selectionIndex++;
        if (this.selectionIndex >= this.suggestions.length) this.selectionIndex = 0;
        this.currentSuggestion = this.suggestions[this.selectionIndex].word;
        this._highlighSelection();
    }
    selectPrevious() {
        this.selectionIndex--;
        if (this.selectionIndex < 0) {
            this.selectionIndex = this.suggestions.length - 1;
        }
        this.currentSuggestion = this.suggestions[this.selectionIndex].word;
        this._highlighSelection();
    }
    _highlighSelection() {
        Array.from(this._suggestions.children).forEach((suggestion, i) => {
            if (this.selectionIndex === i) {
                suggestion.classList.add('selected');
                suggestion.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest'
                });
                const defs = this.suggestions[this.selectionIndex].definitions;
                this._definitions.innerHTML = '';
                defs.forEach(x => {
                    const div = document.createElement('div');
                    div.textContent = `(${x.grammer}) ${x.definition}`;
                    this._definitions.appendChild(div);
                });
            }
            else suggestion.classList.remove('selected');
        });

    }
}