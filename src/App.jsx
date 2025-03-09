import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import useSound from 'use-sound';
import Confetti from 'react-confetti';
import { getRandomCountries } from './data/countries';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const App = () => {
  const [currentFlag, setCurrentFlag] = useState(null);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [options, setOptions] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState(null);
  
  // Game states
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [playerName, setPlayerName] = useState('');
  const [showNameDialog, setShowNameDialog] = useState(true);

  const handleNameSubmit = () => {
    if (playerName.trim()) {
      setShowNameDialog(false);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    generateNewRound();
  };

  const generateNewRound = () => {
    const roundCountries = getRandomCountries();
    const correctCountry = roundCountries[Math.floor(Math.random() * roundCountries.length)];
    setCurrentFlag(correctCountry);
    setOptions(roundCountries);
  };

  const handleAnswer = (country) => {
    if (country.id === currentFlag.id) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        generateNewRound();
      }, 2000);
    } else {
      setWrongAnswer(country.id);
      setTimeout(() => {
        setWrongAnswer(null);
      }, 1000);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 4, position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ pb: 10 }}></Box>
        <Typography variant="h2" component="h1" sx={{ mb: 4, color: '#2196f3' }}>
        {playerName}'s World Flag Adventure! 🌎
      </Typography>
      
      {!gameStarted ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Hey {playerName}! Ready to explore the world?
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            size="large"
            onClick={startGame}
            sx={{ fontSize: '1.5rem', padding: '15px 30px' }}
          >
            Start Playing! 🚀
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
          <Typography variant="h4">
            {playerName}'s Score: {score}
          </Typography>
          
          {currentFlag && (
            <>
              <Typography variant="h1" sx={{ fontSize: '8rem', mb: 2 }}>
                {currentFlag.flag}
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, width: '100%', maxWidth: 600 }}>
                {options.map((country) => (
                  <Button
                    key={country.id}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => handleAnswer(country)}
                    sx={{
                      fontSize: '1.2rem',
                      padding: '20px',
                      minHeight: '80px',
                      backgroundColor: wrongAnswer === country.id ? '#ff0000' : undefined,
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: wrongAnswer === country.id ? '#ff0000' : '#1976d2'
                      }
                    }}
                  >
                    {country.name}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Box>
      )}

      {showConfetti && <Confetti />}

      <Dialog open={showNameDialog} onClose={() => {}} disableEscapeKeyDown>
        <DialogTitle>Welcome to World Flag Adventure!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="What's your name?"
            type="text"
            fullWidth
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNameSubmit} disabled={!playerName.trim()}>
            Let's Play!
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ position: 'absolute', bottom: 20, left: 0, right: 0, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Created by <a href="https://twitter.com/khaeld90s" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>Khaled Eldahshan</a> using Trae AI
        </Typography>
      </Box>
    </Container>
  );
};

export default App;