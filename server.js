const express = require('express')
const app = express()
const dotenv= require("dotenv").config();
const port = process.env.PORT||5000
const hostname = '127.0.0.1'

app.use("/api/contacts",require("./routes/contactRoute"));

app.listen(port, () => {
  console.log(`Example app listening on port:${port}`)
})
