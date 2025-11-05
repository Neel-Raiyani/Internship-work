const express = require('express');
const app = express();
const mongoose = require('mongoose');
require ('dotenv').config();

const PORT = process.env.PORT;
const mongodbURL = process.env.MONGO_URL;

mongoose.connect(mongodbURL)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("Connection Errorrrrrr!!!!!",err))

app.get('/api/test',(req, res) => {
    res.json({
        name: "Neel Raiyani",
        city: "Bhuj"
    })
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});