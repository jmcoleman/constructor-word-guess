var Letter = require("./letter.js");

var WordCategories = [
    { "name": "All",
      "wordlist": ["United Kingdom","Windsor Castle","Duke of Sussex","Prince Harry","St. George Cathedral","Meghan Markle","Duchess of Sussex",
            "Carriage","black-tie","Frogmore House","Jaguar","Queen Elizabeth II","Celebreties","Ascot Landau","Commonwealth","Blues and Royals",
            "frockcoat","Veil","page boys","tiara","Duke of Cambridge","best man","Archbishop of Canterbury","St. George's Chapel","Duchess of Cambridge",
            "Prince George","Princess Charlotte","St. George's Hall","Bishop Michael Curry","Doria Ragland","Prince of Wales","Nottingham Cottage","American",
            "Suits","Princess of Wales","fireworks","cocktail ring","Princess Diana","The Royal Navy","British Army","Royal Air Force","parade","Captain Wales","fashion","modern","diversity","Prince William","Kensington Palace","Nott Cott","Prince Charles",
            "George Clooney","Amal Clooney", "Serena Williams","David Beckham","Oprah Winfrey","Sir Elton John"] }
 ];

var Word = function() {
    this.letters = [];
    this.guessWord = '';
    this.wordBank = WordCategories[0].wordlist;  

    this.selectRandomWord = function() {
        var randomEntry = Math.floor(Math.random() * this.wordBank.length);

        this.guessWord = this.wordBank[randomEntry].toUpperCase();

        // for each letter in the guessWord, create a letter object
        for (i=0; i < this.guessWord.length; i++) {
            this.letters.push(new Letter(this.guessWord[i]));
        }
    };

    this.makeGuess = function(character) {
        var found = false;

        // for each letter, check to see if it is guessed and set it accordingly
        for (i=0;i < this.letters.length; i++) {
            // console.log("letter being guessed: " + character);
            var letterFound = this.letters[i].guessLetter(character);
            // console.log("letter found: " + letterFound);
            // console.log("letter guessed: " + this.letters[i].isGuessed);

            if (letterFound) {found = true;};
        }
        return found;
    };

    this.wordSolved = function() {

        for (i=0; i < this.letters.length; i++) {
            if (this.letters[i].isGuessed === false) {
                return false;
            }
        }

        return true;
    }
};

// add toString method to the word object
Word.prototype.toString = function() {
    var gameWord = '';

    for (i=0;i < this.letters.length; i++) {
        gameWord = gameWord + " " + this.letters[i];
    }
    gameWord = gameWord + "\n";
    return gameWord;
};

module.exports = Word;

