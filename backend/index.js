const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send("This Works"))

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server is up on port ${port}`))
