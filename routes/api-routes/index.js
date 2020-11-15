const express = require("express");
const commentsRoute = require("./comments");
const groupRoute = require("./group");
const newMember = require("./newMember");
const router = express.Router();

router.use("/comments", commentsRoute);

router.use("/group", groupRoute);

router.use("/newMember", newMember);

module.exports = router;
