

const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const hangmanImage = document.querySelector(".hangman_box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");


const clickSound = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Button click.mp3");
const backgroundMusic = new Audio("C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Audio Files/Background.mp3");

backgroundMusic.loop = true; // Loop background music
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
const backendBaseUrl = "http://localhost:5000"; // Update with your backend URL

// Fetch user stats
const fetchUserStats = async (username) => {
  try {
      const response = await axios.get(`${backendBaseUrl}/get-stats/${username}`);
      console.log(response.data); // Handle stats as needed
  } catch (error) {
      console.error("Error fetching user stats:", error);
  }
};

// Initialize the game
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/hangman-0.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
    wordDisplay.innerHTML = currentWord
        .split("")
        .map(() => `<li class="letter"></li>`)
        .join("");
    gameModal.classList.remove("show");
};

const getRandomWord = () => {
    const categories = Object.keys(wordList);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const wordsInCategory = wordList[randomCategory];
    const { word, hint } = wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)];

    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;

    resetGame();
};

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : "The correct word was:";
        gameModal.querySelector("img").src = `C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/images/${isVictory ? "victory" : "lost"}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? "Good Job!" : "Game Over!";
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
};

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
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

// Update user score
const updateUserScore = async (username, score, isWin) => {
  try {
      const response = await axios.post(`${backendBaseUrl}/update-score`, {
          username,
          score,
          isWin,
      });
      console.log(response.data); // Handle updated stats as needed
  } catch (error) {
      console.error("Error updating user score:", error);
  }
};

//Keyboard Set up
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => {
        clickSound.currentTime = 0;
        clickSound.play();
        initGame(e.target, String.fromCharCode(i));
    });
}

playAgainBtn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
    getRandomWord();
});

window.onload = () => {
    getRandomWord();
};


