const express = require("express");
const commentsRoute = require("./comments");
const groupRoute = require("./group");
const newMember = require("./newMember");
const createGroupRoute = require("./createGroup");
const router = express.Router();

router.use("/comments", commentsRoute);

router.use("/createGroup", createGroupRoute);

router.use("/group", groupRoute);

router.use("/newMember", newMember);

module.exports = router;
