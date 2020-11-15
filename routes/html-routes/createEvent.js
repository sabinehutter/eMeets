const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /commnets
router.get("/", (req, res) => {
   // get comments from db and send to template
   db.UpcomingEvents.findAll({})
      .then(data => res.render("groupView", { event_title: data[2], event_date: data[3], event_url: data[4] }))
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
