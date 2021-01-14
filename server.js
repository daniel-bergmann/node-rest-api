require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.error(error));


// connecting to mongoDB
const db = mongoose.connection
    db.on('error', (error) =>console.error(error))
    db.once('open', () => console.log('connected to database'))


app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)
// this route goes to this route below:
// 'localhost:3000/subscribers'

// We are listening on localhost 3000
app.listen(3000, () => console.log('server working'));
