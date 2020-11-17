const express = require("express");
const router = express.Router();

// routing (html) /member
router.get("/newMember", function (req, res) {
   res.render("newMember");
});

module.exports = router;
