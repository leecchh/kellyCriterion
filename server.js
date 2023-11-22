const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
    const { p, k, odds } = req.body;

    // Convert American odds to European (decimal) odds
    let b;
    if (odds > 0) {
        b = odds / 100;  // For positive odds
    } else {
        b = -100 / odds; // For negative odds
    }

    // Calculate the probability of losing
    const q = 1 - p;

    // Calculate the fraction of the bankroll to bet using Kelly Criterion
    let f_star = (b * p - q) / b;

    // Check if the optimal bet is negative
    let response = { optimalBet: 0, comment: '' };
    if (f_star < 0) {
        response.comment = 'Optimal bet is negative, indicating no positive expected value. Suggested bet is 0.';
    } else {
        // Round the optimal bet to 2 decimal places and multiply by bankroll
        response.optimalBet = parseFloat(f_star * k).toFixed(2);
    }

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
