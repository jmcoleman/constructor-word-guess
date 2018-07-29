# constructor-word-guess
Constructor Word Guess

Play a command line word guess game using a word bank.  You will have 5 tries to come up with all the letters for the randomly selected word using the command line.

**Problem description:** Write a command-line word guess game using node.\
**How solved:** Used the inquirer node package to have the user guess the letters of the word to guess.  The game can be played continuously until Ctrl+C is entered to end the game.\
**Technical approach:** Using javascript constructor functions and node, users are able to enter guesses for a random word that is selected from a word bank.  Entries are provided from the command line, validated, and compared to the randomly selected word with feedback after each turn.

## Getting Started

Clone the repository locally.
Change to the project directory.
Run 'npm install Inquirer' from the command line.
Run 'node index.js' from the command line to launch the program.

### Prerequisites

Install node.

### Installing

To get a development environment running, clone the repository locally.
Install the Inquirer packages using 'npm install inquirer' from the command line.

## Running tests

User testing was done manually for happy path and edge cases.

### Test coverage includes

1. Capture of various keystrokes
2. Capture of a single keystroke for each guess
3. Resubmittal of both correct and incorrect letters within the same game without impacting results
4. Ability to play multiple times after winning or losing a game
5. Winning with feedback to user
6. Losing with feedback to user
7. Use of special characters and handling such that those characters are automatically matched, such as whitespace and quotes.

## Deployment

This is a command-line project and not deployable to github pages.

## Built With

The project is written in JavaScript using node.

**Technologies**\
JavaScript and Node using the Inquirer node package.

## Contributing

N/A

## Versioning

Version 1.0

## Authors

**Jenni Coleman** 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments
