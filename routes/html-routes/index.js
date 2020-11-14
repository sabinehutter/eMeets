const express = require("express");
const router = express.Router();
const commentsRoute = require("./comments");
const memberRoute = require("./member");


router.use("/member", memberRoute);

// get route -> index

router.get("/", (req, res) => {
   res.redirect("/comments");
});



// comments page
router.use("/comments", commentsRoute);

module.exports = router;
