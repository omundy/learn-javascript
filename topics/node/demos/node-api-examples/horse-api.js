let sharp = require("sharp");

// for the API
const express = require('express')
const app = express()
const port = 3000

// 1. run: npm install
// 2. run: node horse-api.js
// 3. visit: http://localhost:3000/new-horse
// 4. look: for the file in this directory

app.get('/new-horse', (req, res) => {
  const d = new Date();
  const t = d.toISOString()
  sharp('horse.jpeg')
    .rotate(Math.floor(Math.random() * 360))
    .tint({
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255)
    })
    .resize(Math.floor(Math.random() * 500))
    .toFile(`horse-${t}.jpeg`);
  res.send({
    "message": "new horse added"
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
