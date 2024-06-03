const express = require('express');
const router = express.Router();
const Fakta = require('../models/Fakta');

// GET /fakta - Hämta alla fakta
router.get('/', async (req, res) => {
    try {
        const fakta = await Fakta.find();
        res.json(fakta);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /fakta/random - Hämta en slumpmässig fakta
router.get('/random', async (req, res) => {
    try {
        const count = await Fakta.countDocuments();
        const random = Math.floor(Math.random() * count);
        const fakta = await Fakta.findOne().skip(random);
        res.json(fakta);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
