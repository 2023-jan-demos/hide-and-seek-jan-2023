/* Imports */

/* Get DOM Elements */
const treeSectionEl = document.getElementById('tree-section');
const boulderSectionEl = document.getElementById('boulder-section');
const shedSectionEl = document.getElementById('shed-section');

// buttons
const treeButtonEl = document.getElementById('tree-button');
const boulderButtonEl = document.getElementById('boulder-button');
const shedButtonEl = document.getElementById('shed-button');

// spans
const correctGuessesEl = document.getElementById('correct-guesses');
const incorrectGuessesEl = document.getElementById('incorrect-guesses');
const totalGuessesEl = document.getElementById('total-guesses');

/* State */
let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

/* Events */
treeButtonEl.addEventListener('click', () => {
    handleGuess('tree');
});

shedButtonEl.addEventListener('click', () => {
    handleGuess('shed');
});

boulderButtonEl.addEventListener('click', () => {
    handleGuess('boulder'); // function call -- cooking the recipe
});

// this is the behavior we get on every guess
// function declaration -- writing the recipe
function handleGuess(placeTheUserClicked) { // when you call this function (cook this recipe, use this juicer) you need to supply a 'place' (just like the ingredients in our analogies)
    removeClasses();
    // cool zone: whatever i write here will happen when the user clicks

    const correctPlace = pickRandomPlace();
    // finally, use the random string to make document.getElementById('tree-section'), 
    // using a template literal
    // D
    const correctSectionEl = document.getElementById(`${correctPlace}-section`);

    //     7) show a smiley face in the correct spot
    correctSectionEl.classList.add('face');

    //     3) compare the correct answer to whatever the user guessed
    if (correctPlace === placeTheUserClicked) {
        // - update state using the new info
        //     4) if they guessed correct, increment correct guesses
        correctGuesses++;
    } else {
        //     5) if they guessed incorrect, increment incorrect guesses
        incorrectGuesses++;
    }

    //     6) no matter what, incremenet total guesses
    totalGuesses++;


    //     8) show the new totals for correct, incorrect, and total guesses in the DOM
    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = incorrectGuesses;
    totalGuessesEl.textContent = totalGuesses;

}

function removeClasses() {
    treeSectionEl.classList.remove('face'); 
    boulderSectionEl.classList.remove('face');
    shedSectionEl.classList.remove('face');
}

function pickRandomPlace() {
        //     - get some info (which button did the user click, and which one was correct?)
    //     1) figure out which button the user clicked -- if we have a different event listener for each button, this is easy
    //     2) come up with a random "correct" answer
    // A
    const places = ['tree', 'boulder', 'shed'];

    // first, get a random number between 0 and 2.
    // B
    const index = Math.floor(Math.random() * places.length);

    // then, get a random string string: tree, boulder, or shed
    // using the random index we made just above 
    // C
    const correctPlace = places[index];

    return correctPlace;
}
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
