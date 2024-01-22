const express = require("express");
const {getTenRepositories} = require("../handler/getTenRepositories");

const router = express.Router();

router.get("/repos", getTenRepositories);

module.exports = {
  router
}