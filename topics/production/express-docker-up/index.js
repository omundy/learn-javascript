// tutorial
// https://medium.com/@justkrup/deploy-a-docker-container-free-on-heroku-5c803d2fdeb1
// https://owen31302.gitbook.io/github-education/heroku/how-to-deploy-nodejs-application-to-heroku-using-docker

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("<h1>Hello world</h1>"));

app.listen(process.env.PORT || 8080);
