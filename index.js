const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require('./routes/book.route.js')
const cors = require('cors')
const userRouter = require('./routes/user.route.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
// app.use(cors({
//   origin: 'http://localhost/3002',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowHeaders: ['content-type']
// }))

app.use('/api/book', bookRouter)
app.use('/auth/book', userRouter)


mongoose
  .connect(
    "mongodb+srv://obeewon20:O3ZX4wPoIQxSjaJT@cluster0.vh9mqxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
