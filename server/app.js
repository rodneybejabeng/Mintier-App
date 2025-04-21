const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors()); // Add CORS support
app.use(express.json());

// Serve static files from the build directory
app.use(express.static('build'));

// Listen on specified PORT
app.listen(PORT, () => console.log(`Server Started! on http://localhost:${PORT}`));

// Sample data for the app
const items = [
    { name: 'item1', price: 1000 },
    { name: 'item2', price: 500 },
];

// API Routes for data access
app.get('/api/items', (req, res) => {
    res.send(items);
});

// Add more API endpoints for financial data as needed
