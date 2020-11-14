const express = require("express");
const router = express.Router();
const commentsRoute = require("./comments");
const memberRoute = require("./member");
const group = require("./group");


router.use("/member", memberRoute);

router.use("/group/:groupid", group);
// get route -> index

router.get("/", (req, res) => {
   res.redirect("/comments");
});



// comments page
router.use("/comments", commentsRoute);

module.exports = router;
