const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get user stats
router.get('/users/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update user stats
router.patch('/users/:username', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { username: req.params.username },
            { $set: req.body },
            { new: true }
        );
        if (!updatedUser) return res.status(404).send("User not found");
        res.send(updatedUser);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
