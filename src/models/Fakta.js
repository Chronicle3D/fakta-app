const mongoose = require('mongoose');

const faktaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Fakta', faktaSchema);
