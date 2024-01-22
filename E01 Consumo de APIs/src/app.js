const express = require("express");
const {router} = require("./route/index");

const server = express();

server.use(express.json());
server.use(router);

module.exports = {
  server
}