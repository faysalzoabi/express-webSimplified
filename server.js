require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true  });
const db = mongoose.connection
db.on('error' , () => console.error('error'));
db.once('open', () => console.log('connected to database'));

// let our server access json in body
app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

// listening to server
app.listen(3000, () => console.log('server has started'));
