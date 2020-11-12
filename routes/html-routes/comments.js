const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /commnets
router.get("/", (req, res) => {
   // get comments from db and send to template
   db.Group.findAll({})
      .then(res.render("index"))
      .catch(err => {
         res.status(500);
         console.log(err);
      });
});

module.exports = router;
