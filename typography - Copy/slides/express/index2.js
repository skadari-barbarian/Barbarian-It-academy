const express = require('express');
const path = require('path');
const app = express();
// Prevent this page from being displayed in an iframe
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "DENY");
    next();
});
// Serve static files
app.use(express.static('public2'));
// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public2', 'index2.html'));
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});