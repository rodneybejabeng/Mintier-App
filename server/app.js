// require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// Listen on specified PORT
app.listen(PORT, () => console.log(`Server Started! on http://localhost:${PORT}`));

app.use(express.static('build'));


// Sample data
const items = [
    { name: 'item1', price: 1000 },
    { name: 'item2', price: 500 },
];

// Routes
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(500).send("Error creating user: " + error.message);
    }
});

app.get('/api/items', (req, res) => {
    res.send(items);
});
