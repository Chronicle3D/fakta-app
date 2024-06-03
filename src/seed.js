const mongoose = require('mongoose');
const Fakta = require('./models/Fakta');

mongoose.connect('mongodb://mongo:27017/fakta', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    const fakta = [
        { text: 'Fakta 1' },
        { text: 'Fakta 2' },
        { text: 'Fakta 3' },
        { text: 'Fakta 4' },
        { text: 'Fakta 5' },
        { text: 'Fakta 6' },
        { text: 'Fakta 7' },
        { text: 'Fakta 8' },
        { text: 'Fakta 9' },
        { text: 'Fakta 10' },
    ];

    try {
        await Fakta.insertMany(fakta);
        console.log('Fakta har lagts till');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
});
