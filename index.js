const express = require('express');

const app = express();
const PORT = 5000;
const router = require('./routes/index');

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
