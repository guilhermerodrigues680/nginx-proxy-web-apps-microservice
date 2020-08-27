const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World! Microservice Node.js')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})