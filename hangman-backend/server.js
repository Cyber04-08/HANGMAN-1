require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection String
const MONGO_URI = "mongodb://localhost:27017/HANGMAN"; // Your database name is HANGMAN

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Schema for the example document
const gameSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number,
});

const Game = mongoose.model("Game", gameSchema);

// API Endpoints

// Get all games
app.get("/games", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

// Add a new game
app.post("/games", async (req, res) => {
  const { title, author, pages, genres, rating } = req.body;
  try {
    const newGame = new Game({ title, author, pages, genres, rating });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: "Failed to add game" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// require('dotenv').config(); // Add this for environment variables
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000; // Use PORT from environment variables

// // Middleware
// app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:3000' })); // Adjust based on frontend URL

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// // Define the User schema and model
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     highestScore: { type: Number, default: 0 },
//     gamesWon: { type: Number, default: 0 },
//     gamesLost: { type: Number, default: 0 },
//     totalGames: { type: Number, default: 0 },
// });

// const User = mongoose.model("User", userSchema);

// // Routes
// app.get("/", (req, res) => {
//     res.send("Welcome to the Hangman Game Backend!");
// });

// // Get user stats
// app.get("/get-stats/:username", async (req, res) => {
//     const { username } = req.params;
//     try {
//         let user = await User.findOne({ username });
//         if (!user) {
//             user = new User({ username });
//             await user.save();
//         }
//         res.json(user);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// // Update user score
// app.post("/update-score", async (req, res) => {
//     const { username, score, isWin } = req.body;

//     try {
//         let user = await User.findOne({ username });
//         if (!user) {
//             user = new User({ username, totalGames: 1 });
//             if (isWin) {
//                 user.gamesWon = 1;
//                 user.highestScore = score;
//             } else {
//                 user.gamesLost = 1;
//             }
//             await user.save();
//         } else {
//             user.totalGames += 1;
//             if (isWin) {
//                 user.gamesWon += 1;
//                 if (score > user.highestScore) user.highestScore = score;
//             } else {
//                 user.gamesLost += 1;
//             }
//             await user.save();
//         }
//         res.json({ message: "User stats updated", user });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });





// // const express = require("express");
// // const mongoose = require("mongoose");
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const app = express();
// // const PORT = 5000

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(cors());

// // // Define a route for the root URL
// // app.get("/", (req, res) => {
// //     res.send("Welcome to the Hangman Game Backend!");
// // });

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });

// // // Connect to MongoDB
// // mongoose.connect("mongodb://localhost:27017/hangman", { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log("MongoDB connected"))
// //     .catch(err => console.error(err));

// // // Schema for user statistics
// // const userSchema = new mongoose.Schema({
// //     username: { type: String, required: true, unique: true },
// //     highestScore: { type: Number, default: 0 },
// //     gamesWon: { type: Number, default: 0 },
// //     gamesLost: { type: Number, default: 0 },
// //     totalGames: { type: Number, default: 0 },
// // });

// // // Model
// // const User = mongoose.model("User", userSchema);

// // // API Endpoints

// // // Get user stats
// // app.get("/get-stats/:username", async (req, res) => {
// //     const { username } = req.params;
// //     try {
// //         let user = await User.findOne({ username });
// //         if (!user) {
// //             user = new User({ username });
// //             await user.save();
// //         }
// //         res.json(user);
// //     } catch (err) {
// //         res.status(500).json({ error: "Server error" });
// //     }
// // });

// // // Update user score
// // app.post("/update-score", async (req, res) => {
// //     const { username, score, isWin } = req.body;

// //     try {
// //         const user = await User.findOne({ username });
// //         if (user) {
// //             user.totalGames += 1;
// //             if (isWin) {
// //                 user.gamesWon += 1;
// //                 if (score > user.highestScore) user.highestScore = score;
// //             } else {
// //                 user.gamesLost += 1;
// //             }
// //             await user.save();
// //             res.json({ message: "User stats updated", user });
// //         } else {
// //             res.status(404).json({ error: "User not found" });
// //         }
// //     } catch (err) {
// //         res.status(500).json({ error: "Server error" });
// //     }
// // });

// // // // Start the server
// // // const PORT = 5000;
// // // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
