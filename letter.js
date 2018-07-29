const LETTER_PLACEHOLDER = '_';

// constructor function for creating new letters
var Letter = function(letter) {
    this.character = letter;
    this.placeholder = (this.character === ' ' || (/[.']/.test(this.character))) ? this.character : LETTER_PLACEHOLDER;
    this.isGuessed = (this.character === ' ' || (/[.']/.test(this.character))) ? true : false;

    this.toString = function() {
        return (this.isGuessed) ? this.character : this.placeholder;
    };

    this.guessLetter = function(guess) {
        guess = guess.toUpperCase();

        if (this.character === guess) {
            this.isGuessed = true;
            // console.log("correct guess of " + guess);
            return true;
        }

        return false;
    };

};

// export the constructor for use
module.exports = Letter;