
const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /comments
router.get("/",(req, res,next) => {
   // get comments from db and send to template
   db.Group.findAll({})
      //.then (result => {
   // console.log(result);
   //res.json(result);
   // }
   // ) .catch(err => {
      .then(group_name => res.render("index", {group_name: group_name}))
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;