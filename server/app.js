const express = require("express");

const app = express();

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log('Server Started! on http://localhost:8001'));

app.use(express.static('build'));

const items = [
    {
        name: 'item1',
        price: 1000,
    },
    {
        name: 'item2',
        price: 500,
    },
];

app.get('/api/items', (req, res) => {
    res.send(items);
})