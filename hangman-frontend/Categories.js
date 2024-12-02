// Reference the container where buttons will be added
const categoryContainer = document.querySelector(".categories");
const backButton = document.querySelector(".back-button");

// Function to generate category buttons
const generateCategoryButtons = () => {
    if (!wordList || Object.keys(wordList).length === 0) {
        console.error("Word list is empty or undefined.");
        categoryContainer.innerHTML = "<p>No categories available.</p>";
        return;
    }

    // Create a button for each category
    Object.keys(wordList).forEach((category) => {
        const button = document.createElement("button");
        button.className = "category-button";
        button.innerText = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
        button.addEventListener("click", () => {
            // Store the selected category and navigate to the game page
            localStorage.setItem("selectedCategory", category);
            window.location.href = "C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Hangman.html"; // Replace with your game page URL
        });
        categoryContainer.appendChild(button);
    });
};

// Navigate back to the landing page
backButton.addEventListener("click", () => {
    window.location.href = "C:/Users/nwane/OneDrive/Desktop/HANGMAN/hangman-frontend/Landing Page.html"; // Replace with your landing page URL
});

// Generate buttons on page load
generateCategoryButtons();
