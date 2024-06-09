// src/App.js
import React, { useState } from 'react';
import { Container, Typography, Button, ButtonGroup, Grid } from '@mui/material';
import axios from 'axios';


const betAmounts = [100, 200, 500];

const MainComp = () => {
    const [points, setPoints] = useState(5000);
    const [bet, setBet] = useState(100);
    const [choice, setChoice] = useState('');
    const [result, setResult] = useState(null);
    const [rolling, setRolling] = useState(false);

    const handleRollDice = async () => {
        if (!choice) return alert('Please select 7 Up, 7 Down, or Lucky 7');
        setRolling(true);

        try {
            const rollResponse = await axios.post('http://localhost:5000/api/roll');
            const { dice1, dice2, total } = rollResponse.data;

            const updateResponse = await axios.post('http://localhost:5000/api/update-points', { bet, choice, total });
            const { points } = updateResponse.data;

            setResult({ dice1, dice2, total });
            setPoints(points);
        } catch (error) {
            console.error('Error rolling dice:', error);
        } finally {
            setRolling(false);
        }
    };

    return (
        <Container maxWidth="xs" className="App">
            <Typography variant="h4" gutterBottom>
                7 Up 7 Down Game
            </Typography>
            <Typography variant="h6" gutterBottom>
                Points: {points}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Bet Amount</Typography>
                    <ButtonGroup fullWidth>
                        {betAmounts.map(amount => (
                            <Button
                                key={amount}
                                variant={bet === amount ? 'contained' : 'outlined'}
                                onClick={() => setBet(amount)}
                            >
                                {amount}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">Choose</Typography>
                    <ButtonGroup fullWidth>
                        <Button
                            variant={choice === '7up' ? 'contained' : 'outlined'}
                            onClick={() => setChoice('7up')}
                        >
                            7 Up
                        </Button>
                        <Button
                            variant={choice === '7' ? 'contained' : 'outlined'}
                            onClick={() => setChoice('7')}
                        >
                            Lucky 7
                        </Button>
                        <Button
                            variant={choice === '7down' ? 'contained' : 'outlined'}
                            onClick={() => setChoice('7down')}
                        >
                            7 Down
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleRollDice}
                        disabled={rolling}
                    >
                        {rolling ? 'Rolling...' : 'Roll Dice'}
                    </Button>
                </Grid>
            </Grid>
            {result && (
                <Typography variant="h6" gutterBottom>
                    Dice Result: {result.dice1} + {result.dice2} = {result.total}
                </Typography>
            )}
        </Container>
    );
};

export default MainComp;
