const express = require("express");
const commentsRoute = require("./comments");
const groupRoute = require("./group");
const newMember = require("./newMember");
const createGroupRoute = require("./createGroup");
const createEventRoute = require("./createEvent");
const router = express.Router();

router.use("/comments", commentsRoute);

router.use("/createGroup", createGroupRoute);

router.use("/group", groupRoute);

router.use("/newMember", newMember);

router.use("/createEvent", createEventRoute);

module.exports = router;
