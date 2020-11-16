const express = require("express");
const router = express.Router();
const db = require("../../models");

// /api/commnet/create 
// post comment route -> back to index
router.post("/create", (req, res, next) => {
   db.UpcomingEvents.create(req.body)
      .then(newEvent => {
         console.log(newEvent);
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
