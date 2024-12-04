// Select elements
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const hangmanImage = document.querySelector(".hangman_box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const backButton = document.querySelector(".back-button");
const homeButton = document.querySelector(".home-button");

const clickSound = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Button click.mp3");
const backgroundMusic = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Background.mp3");

backgroundMusic.loop = true; // Loop background music
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let selectedWords; // Word list for the selected category
let score = 0;
let highestScore = 0



//Save Game Data
const saveGameData = async (username, score, outcome) => {
    try {
        const response = await axios.post('http://localhost:5000/api/games', {
            username,
            score,
            outcome
        });
        console.log('Game data saved:', response.data);
    } catch (error) {
        console.error('Error saving game data:', error.message);
    }
};


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
    setTimeout(async () => {
        const modalText = isVictory ? `You found the word:` : "The correct word was:";
        gameModal.querySelector("img").src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/${isVictory ? "victory" : "lost"}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? "Good Job!" : "Game Over!";
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");

        // Increment score if the player wins
        if (isVictory) {
            score += 10;
            document.getElementById("score").innerText = score;

            // Update highest score if the current score exceeds it
            if (score > highestScore) {
                highestScore = score;
                document.getElementById("highest-score").innerText = highestScore;
            }
        }

        // Prepare game data
        const gameData = {
            username: "player1", // Replace with dynamic username if available
            score: score,
            outcome: isVictory ? "Win" : "Lose",
        };

        // Send game data to the backend
        try {
            const response = await axios.post('http://localhost:5000/api/games', gameData);
            console.log("Game data saved:", response.data);
        } catch (error) {
            console.error("Error saving game data:", error.message);
        }
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




homeButton.addEventListener("click", () => {
    window.location.href = "C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Landing Page.html";
});


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












