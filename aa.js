const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to log the request and response
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Route to send a web request to icanhazip.com and log the response
app.get('/getIP', async (req, res) => {
  try {
    const response = await axios.get('https://icanhazip.com');
    console.log('Response from icanhazip.com:', response.data);
    res.send('Response logged in console.');
  } catch (error) {
    console.error('Error fetching IP:', error.message);
    res.status(500).send('Error fetching IP.');
  }
});

// Route to respond with "hello" at the root URL
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
