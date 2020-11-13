const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /commnets
router.get("/", (req, res) => {
   // get comments from db and send to template
   db.Group.findAll({})
      .then(group_name => res.render("index", {group_name: group_name}))
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
