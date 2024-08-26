const express = require('express');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up environment variables
require('dotenv').config();

// Configure Winston logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

// Define different severity endpoints
app.get('/info', (req, res) => {
    logger.info('This is an informational message');
    res.send('Info logged');
});

app.get('/warn', (req, res) => {
    logger.warn('This is a warning message');
    res.send('Warning logged');
});

app.get('/error', (req, res) => {
    logger.error('This is an error message');
    res.send('Error logged');
});

app.get('/critical', (req, res) => {
    logger.log('critical', 'This is a critical message');
    res.send('Critical logged');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
