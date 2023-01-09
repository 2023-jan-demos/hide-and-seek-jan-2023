## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup
- buttons
    - why? let the user guess (and increase counters state)
    - how? buttonEl.addEventListener('click', () => {})
- 3 hiding-place images
    - why? show the user the "correct" guess with a smiley face
    - how? img.classList.add('face')
- correct guesses element
    - why? show the user the number of correct guesses
    - how? correctEl.textContent = correctGuesses
- incorrect guesses element
    - why? show the user the number of incorrect guesses
    - how? incorrectEl.textContent = incorrectGuesses
- total games element
    - why? show the user the number of total guesses
    - how? totalEl.textContent = totalGuesses

## State
- let currentHidingPlace = null;
- let correctGuesses = 0;
- let incorrectGuesses = 0;
- let totalGames = 0;

## Events
user clicks on a button to make a guess
- what happens when the user clicks?
    - get some info (which button did the user click, and which one was correct?)
        1) figure out which button the user clicked
        2) come up with a random "correct" answer
        3) compare the correct answer to whatever the user guessed
    - update state using the new info
        4) if they guessed correct, increment correct guesses
        5) if they guessed incorrect, increment incorrect guesses
        6) no matter what, incremenet total guesses
    - update DOM with the new state
        7) show a smiley face in the correct spot
        8) show the new totals for correct, incorrect, and total guesses in the DOM
