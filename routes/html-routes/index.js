const express = require("express");
const router = express.Router();
const commentsRoute = require("./comments");
const memberRoute = require("./member");
const groupRoute = require("./group");
const newMemberRoute = require("./newMember");
const createGroupRoute = require("./createGroup");


router.use("/member", memberRoute);

router.use("/group", groupRoute);

router.get("/createGroup", createGroupRoute);

router.get("/newMember", newMemberRoute);
// get route -> index

router.get("/", (req, res) => {
   res.redirect("/comments");
});



// comments page
router.use("/comments", commentsRoute);

module.exports = router;
