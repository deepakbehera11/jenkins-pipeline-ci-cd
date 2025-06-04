const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello I am deepak, I am a devops engineer, This is jenkin pipeline from Node.js Demo App!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
