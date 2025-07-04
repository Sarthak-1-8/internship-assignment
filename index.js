const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('🚀 Node.js app deployed with GitHub Actions!');
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
