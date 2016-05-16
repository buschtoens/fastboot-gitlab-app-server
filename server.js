'use strict';

const FastBootGitLabAppServer = require('./');

const server = new FastBootGitLabAppServer({
  url:   process.ENV.URL,
  token: process.ENV.TOKEN
});

server.start();
