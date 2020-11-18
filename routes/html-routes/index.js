const express = require("express");
const router = express.Router();
const commentsRoute = require("./comments");
// const memberRoute = require("./member");
const groupRoute = require("./group");
const newMemberRoute = require("./newMember");
const createGroupRoute = require("./createGroup");
const memberSearch = require("./memberSearch");


// router.get("/member/:memberid", memberSearch);

router.get("/member", memberSearch);

router.get("/group/:groupid", groupRoute);

router.get("/createGroup", createGroupRoute);

router.get("/newMember", newMemberRoute);

// router.get("/member/:memberid", memberSearch);

// get route -> index

router.get("/", (req, res) => {
   res.redirect("/comments");
});



// comments page
router.use("/comments", commentsRoute);

module.exports = router;
