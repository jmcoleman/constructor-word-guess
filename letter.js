const LETTER_PLACEHOLDER = '_';

//////////////////////////////////////////////////////
// constructor function for creating new letters
//////////////////////////////////////////////////////
var Letter = function(letter) {
    this.character = letter;
    this.placeholder = (this.character === ' ' || (/[.']/.test(this.character))) ? this.character : LETTER_PLACEHOLDER;
    this.isGuessed = (this.character === ' ' || (/[.']/.test(this.character))) ? true : false;
};

////////////////////////////////////////
// add methods to the Letter object
////////////////////////////////////////

// add toString method
Letter.prototype.toString =  function() {
    return (this.isGuessed) ? this.character : this.placeholder;
};

// add guessLetter method
Letter.prototype.guessLetter = function(guess) {
    guess = guess.toUpperCase();

    if (this.character === guess) {
        this.isGuessed = true;
        // console.log("correct guess of " + guess);
        return true;
    }

    return false;
};

/////////////////////////////////////
// export the letter object for use
/////////////////////////////////////
module.exports = Letter;