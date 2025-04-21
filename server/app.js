const express = require('express');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the build directory
app.use(express.static('build'));

// Listen on specified PORT
app.listen(PORT, () => console.log(`Server Started! on http://localhost:${PORT}`));

// Sample data
const items = [
    { name: 'item1', price: 1000 },
    { name: 'item2', price: 500 },
];

const adminCredentials = [{
    name: 'Rodney',
    email: 'Bejabeng.r@gmail.com',
    password: 'preston1993',
    }, {
    name: 'Rodney',
    email: 'bejabeng.r@gmail.com',
    password: 'preston1993',
    }];

// Routes
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = adminCredentials.find(u => u.email === email.toLowerCase() && u.password === password);
    if (user) {
        res.status(200).json({ message: "Login successful", user: user.name });
        console.log((`Email: ${email}, Password: ${password} both exists in database!`));
    } else {
        res.status(401).json({ message: "Invalid credentials" });
        console.log(`Email: ${email} does not exist in database!`);
    }
});

app.get('/api/items', (req, res) => {
    res.send(items);
});
