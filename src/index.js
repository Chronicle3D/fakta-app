const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const faktaRouter = require('./routes/fakta');

const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/fakta', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  
console.log('Views directory:', path.join(__dirname, 'views')); 

app.use(express.json());
app.use('/fakta', faktaRouter);

app.get('/', (req, res) => {
    res.render('index', { fakta: null });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
