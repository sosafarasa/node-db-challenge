const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');

const projectsRouter = require('./data/projects/projects-router');
const actionsRouter = require('./data/actions/actions-router');

dotenv.config();
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


module.exports = server;