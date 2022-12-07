// let sharp = require("sharp");




// const express = require('express')
// const app = express()
// const port = 3000

var fetch = require('node-fetch');

async function reloadData() {
    await fetch("https://www.google.com/search?q=cat")
      .then(response => {
        return response.text();
      })
      .then(text=> {
        console.log(text)
      });
  }

(async function(){
  await reloadData()
})()

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
