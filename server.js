const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3001;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// Routen für die Hauptseite und die neuen Seiten
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/linkliste', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'linkliste.html'));
});

app.get('/wiki', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'wiki.html'));
});

app.get('/downloads', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'downloads.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
