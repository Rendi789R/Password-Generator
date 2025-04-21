// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Password Generator app listening at http://localhost:${port}`);
});
