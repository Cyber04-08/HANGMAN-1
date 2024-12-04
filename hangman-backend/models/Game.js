const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
    outcome: { type: String, required: true, enum: ['Win', 'Lose'] },
    gameId: { type: String, required: true }, // This field is required
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
