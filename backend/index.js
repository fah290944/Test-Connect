const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);

app.get("/test", (req, res) => {
    res.send("Hello World!")
  })

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
