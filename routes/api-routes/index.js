const express = require("express");
const commentsRoute = require("./comments");
const groupRoute = require("./group");
const router = express.Router();

router.use("/comments", commentsRoute);

router.use("/group", groupRoute);

module.exports = router;
