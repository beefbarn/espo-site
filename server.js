const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();  // Loads .env variables into `process.env`

const app = express();
const port = process.env.PORT || 3000;  // Set port to 3000 or from environment variable

// Serve static files (your website)
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
