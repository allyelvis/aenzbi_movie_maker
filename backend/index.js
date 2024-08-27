const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/aenzbi_movie_maker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Aenzbi Movie Maker Backend');
});

const projectRoutes = require('./routes/project');
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
