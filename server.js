const express = require('express');

const helmet = require('helmet');

const cors = require('cors');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(cors());
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
console.log(req.method, req.url, Date.now())
next();
};

module.exports = server;
