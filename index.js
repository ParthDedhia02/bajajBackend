const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercase = lowercaseAlphabets.sort().pop() || null;

    res.json({
        is_success: true,
        user_id: "parth_dedhia_01011990",
        email: "your_email@domain.com",
        roll_number: "YourRollNumber",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
