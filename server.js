const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');



const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//database Connection....
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)

const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
});
db.once('open', () => {
    console.log("Connected to database");
});


//route prifix
app.use('/admin', require('./routes/admin'))

//server conection....
app.listen(PORT, () => {
    console.log("Server Started");
})
