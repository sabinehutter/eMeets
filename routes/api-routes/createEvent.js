const express = require("express");
const router = express.Router();
const db = require("../../models");

// /api/commnet/create 
// post comment route -> back to index
router.post("/:id/create", (req, res, next) => {
   db.UpcomingEvents.create({
      event_title: req.body.event_title,
      event_date: req.body.event_date,
      event_group: req.body.event_group,
      event_url: req.body.event_url,
      GroupId: req.params.id

   })
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
