const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let playerPoints = 5000;

const rollDice = () => Math.floor(Math.random() * 6) + 1;

app.post('/api/roll', (req, res) => {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const total = dice1 + dice2;
    res.json({ dice1, dice2, total });
});

app.post('/api/update-points', (req, res) => {
    const { bet, choice, total } = req.body;
    let winMultiplier = 0;

    if (total === 7 && choice === '7') {
        winMultiplier = 5;  // Win multiplier for "Lucky 7"
    } else if (total > 7 && choice === '7up') {
        winMultiplier = 2;  // Win multiplier for "7 Up"
    } else if (total < 7 && choice === '7down') {
        winMultiplier = 2;  // Win multiplier for "7 Down"
    }

    if (winMultiplier === 0) {
        playerPoints -= bet;  // Player loses, deduct the bet amount
    } else {
        playerPoints += bet * winMultiplier;  // Player wins, add winning amount
    }

    res.json({ points: playerPoints });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
