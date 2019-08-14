const express = require('express');
const userRouter = require('./users/userRouter.js')
const colors = require('colors')

const server = express();

server.use(express.json())

server.use(logger)

server.use('/api/users', userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const time = new Date()
  console.log(`Sent` + ` ${req.method}`.bold.magenta + ` request to` + ` '${req.url}'`.yellow + ` on` + ` ${time}`.green)
  next()
};

module.exports = server;
