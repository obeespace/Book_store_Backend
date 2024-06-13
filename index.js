const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require('./routes/book.route.js')
const cors = require('cors')
const userRouter = require('./routes/user.route.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
require('dotenv').config()
// app.use(cors({
//   origin: 'http://localhost/3002',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowHeaders: ['content-type']
// }))

app.use(process.env.APP_BOOK_ROUTE, bookRouter)
app.use(process.env.APP_AUTH_ROUTE, userRouter)


mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
    app.listen(3030, () => {
        console.log("listening at 3030");
      });
    console.log("connected");
  })
  .catch(() => {
    console.log("connection failed"); 
  });

//   Goldfish@31
