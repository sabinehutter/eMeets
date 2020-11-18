const express = require("express");
const router = express.Router();
const db = require("../../models");


router.post("/create", (req, res, next) => {
   db.Group.create(req.body)
      .then(() => {
         res.redirect("/");
      // optionally return data created
      // res.json(newComment)
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
