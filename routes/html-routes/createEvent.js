const express = require("express");
const router = express.Router();

// routing (html) /commnets
router.get("/group/:groupid", (req, res) => {
   // get comments from db and send to template
   res.render("upcomingEventsView")
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
