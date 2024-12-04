const express = require('express');
const Game = require('../models/Game');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/games', async (req, res) => {
    try {
        const { username, score, outcome } = req.body;

        // Generate a unique gameId
        const gameId = new mongoose.Types.ObjectId().toString();

        // Create a new game record
        const newGame = new Game({ username, score, outcome, gameId });
        await newGame.save();

        res.status(201).json({ game: newGame });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;


// const express = require('express');
// const Game = require('../models/Game');
// const User = require('../models/User');

// const router = express.Router();

// // Save a new game
// router.post('/games', async (req, res) => {
//     try {
//         const newGame = new Game(req.body);
//         await newGame.save();

//         // Update user's game history and stats
//         await User.findOneAndUpdate(
//             { username: req.body.username },
//             {
//                 $push: { gameHistory: req.body },
//                 $inc: {
//                     totalGames: 1,
//                     gamesWon: req.body.outcome === 'Win' ? 1 : 0,
//                     gamesLost: req.body.outcome === 'Lose' ? 1 : 0
//                 }
//             }
//         );

//         res.status(201).send(newGame);
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });

// module.exports = router;
