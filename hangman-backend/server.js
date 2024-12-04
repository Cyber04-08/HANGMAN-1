const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Import CORS middleware for cross-origin requests
const bodyParser = require('body-parser'); // Import Body-Parser to parse JSON requests

// Import Routes
const userRoutes = require('./routes/userRoutes'); // User-related routes
const gameRoutes = require('./routes/gameRoutes'); // Game-related routes

const app = express(); // Initialize Express app
const PORT = 5000; // Define the port your server will run on

// Middleware
app.use(bodyParser.json()); // Parse JSON requests
app.use(cors()); // Allow cross-origin requests

// MongoDB Connection
const mongoURI = "mongodb+srv://nwanekwuboss01:hangman-123@hangman-cluster.3kmia.mongodb.net/HangmanGame?retryWrites=true&w=majority"; // Replace with your MongoDB connection string
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

// Routes
app.use('/api', userRoutes); // Mount user-related routes under /api
app.use('/api', gameRoutes); // Mount game-related routes under /api

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
