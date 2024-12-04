// Select elements
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const hangmanImage = document.querySelector(".hangman_box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const backButton = document.querySelector(".back-button");

const clickSound = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Button click.mp3");
const backgroundMusic = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Background.mp3");

backgroundMusic.loop = true; // Loop background music
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let selectedWords; // Word list for the selected category

// Initialize the keyboard
const initKeyboard = () => {
    keyboardDiv.innerHTML = ""; // Clear existing keyboard
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.className = "keyboard-btn";
        button.addEventListener("click", (e) => {
            clickSound.currentTime = 0;
            clickSound.play();
            initGame(e.target, e.target.innerText);
        });
        keyboardDiv.appendChild(button);
    }
};

// Reset the game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/hangman-0.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord
        .split("")
        .map(() => `<li class="letter"></li>`)
        .join("");
    initKeyboard(); // Ensure the keyboard is initialized
    gameModal.classList.remove("show");
};

// Select a random word from the selected category
const getRandomWord = () => {
    const { word, hint } = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
};

// Handle game over
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : "The correct word was:";
        gameModal.querySelector("img").src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/${isVictory ? "victory" : "lost"}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? "Good Job!" : "Game Over!";
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
};

// Handle game interactions
const initGame = (button, guessedLetter) => {
    if (currentWord.toLowerCase().includes(guessedLetter.toLowerCase())) {
        [...currentWord].forEach((letter, index) => {
            if (letter.toLowerCase() === guessedLetter.toLowerCase()) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Play again logic
playAgainBtn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    getRandomWord();
});

// Back button functionality
backButton.addEventListener("click", () => {
    window.location.href = "C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/CategorySelection.html";
});

// Initialize the game on load
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (typeof wordList === "undefined") {
        console.error("wordList is undefined. Redirecting...");
        window.location.href = "C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/CategorySelection.html";
        return;
    }

    if (category === "Random") {
        selectedWords = Object.values(wordList).flat();
    } else if (wordList[category]) {
        selectedWords = wordList[category];
    } else {
        console.warn("No valid category selected. Using placeholder...");
        selectedWords = [{ word: "placeholder", hint: "No category selected" }];
    }

    getRandomWord();
};












//Old script.js

// const keyboardDiv = document.querySelector(".keyboard");
// const wordDisplay = document.querySelector(".word-display");
// const guessesText = document.querySelector(".guesses-text b");
// const hangmanImage = document.querySelector(".hangman_box img");
// const gameModal = document.querySelector(".game-modal");
// const playAgainBtn = document.querySelector(".play-again");

// const clickSound = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Button click.mp3");
// const backgroundMusic = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Background.mp3");

// backgroundMusic.loop = true; // Loop background music
// let currentWord, correctLetters, wrongGuessCount;
// const maxGuesses = 6;
// const backendBaseUrl = "http://localhost:5000"; // Update with your backend URL

// // Initialize the keyboard
// const initKeyboard = () => {
//     keyboardDiv.innerHTML = ""; // Clear existing keyboard
//     for (let i = 97; i <= 122; i++) {
//         const button = document.createElement("button");
//         button.innerText = String.fromCharCode(i);
//         button.className = "keyboard-btn";
//         button.addEventListener("click", (e) => {
//             clickSound.currentTime = 0;
//             clickSound.play();
//             initGame(e.target, e.target.innerText);
//         });
//         keyboardDiv.appendChild(button);
//     }
// };

// // Fetch user stats
// const fetchUserStats = async (username) => {
//     try {
//         const response = await axios.get(`${backendBaseUrl}/get-stats/${username}`);
//         console.log(response.data); // Handle stats as needed
//     } catch (error) {
//         console.error("Error fetching user stats:", error);
//     }
// };

// // Reset the game
// const resetGame = () => {
//     correctLetters = [];
//     wrongGuessCount = 0;
//     hangmanImage.src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/hangman-0.svg`;
//     guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
//     wordDisplay.innerHTML = currentWord
//         .split("")
//         .map(() => `<li class="letter"></li>`)
//         .join("");
//     initKeyboard(); // Ensure the keyboard is initialized
//     gameModal.classList.remove("show");
// };

// // Get a random word from the word list
// const getRandomWord = () => {
//     const categories = Object.keys(wordList);
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];
//     const wordsInCategory = wordList[randomCategory];
//     const { word, hint } = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

//     currentWord = word;
//     document.querySelector(".hint-text b").innerText = hint;

//     resetGame();
// };

// // Handle game over
// const gameOver = (isVictory) => {
//     setTimeout(() => {
//         const modalText = isVictory ? `You found the word:` : "The correct word was:";
//         gameModal.querySelector("img").src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/${isVictory ? "victory" : "lost"}.gif`;
//         gameModal.querySelector("h4").innerText = isVictory ? "Good Job!" : "Game Over!";
//         gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
//         gameModal.classList.add("show");
//     }, 300);
// };

// // Handle game interactions
// const initGame = (button, guessedLetter) => {
//     if (currentWord.includes(guessedLetter)) {
//         [...currentWord].forEach((letter, index) => {
//             if (letter === guessedLetter) {
//                 correctLetters.push(letter);
//                 wordDisplay.querySelectorAll("li")[index].innerText = letter;
//                 wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
//             }
//         });
//     } else {
//         wrongGuessCount++;
//         hangmanImage.src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/hangman-${wrongGuessCount}.svg`;
//     }

//     button.disabled = true;
//     guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

//     if (wrongGuessCount === maxGuesses) return gameOver(false);
//     if (correctLetters.length === currentWord.length) return gameOver(true);
// };

// // Play again logic
// playAgainBtn.addEventListener("click", () => {
//     clickSound.currentTime = 0;
//     clickSound.play();
//     getRandomWord();
// });

// // Initialize the game on load
// window.onload = () => {
//     getRandomWord();
// };
















