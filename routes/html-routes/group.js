const express = require("express");
const router = express.Router();
const db = require("../../models");

// /group/:groupid

// routing (html) /member
router.get("/group/:groupid", (req, res) => {
   // get comments from db and send to template
// res.render("member",[]);

   console.log(req.params);
   return Promise.all([
      db.Group.findAll({
         where : {
            id : req.params.groupid
         }
      }),
      db.Member.findAll({}),
      db.UpcomingEvents.findAll({})
   ]).then(data => res.render("groupView", {members: data[0],upcomingEvents:data[2]}))
  
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
