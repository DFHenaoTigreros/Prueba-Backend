const express = require("express");
const {getTenRepositories} = require("../handler/getTenRepositories");

const router = express.Router();

router.get("/repositorios", getTenRepositories);

module.exports = {
  router
}