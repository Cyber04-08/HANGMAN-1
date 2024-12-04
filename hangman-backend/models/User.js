const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    totalGames: { type: Number, default: 0 },
    gamesWon: { type: Number, default: 0 },
    gamesLost: { type: Number, default: 0 },
    winStreak: { type: Number, default: 0 },
    topScore: { type: Number, default: 0 },
    gameHistory: [
        {
            gameId: String,
            outcome: String,
            score: Number,
            dateTime: Date
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
