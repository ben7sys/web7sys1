const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Fügen Sie diese Zeile am Anfang der Datei hinzu
const compression = require('compression');

// Fügen Sie diese Zeile vor app.use(express.static(__dirname)); hinzu
app.use(compression());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
