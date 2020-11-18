const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /member



router.get("/newMember", function (req, res) {

   return Promise.all([
      db.Group.findAll({
      })
   ]).then(data => {
      res.render("newMember", {
         group: data[0],
      });
   });
});

module.exports = router;
