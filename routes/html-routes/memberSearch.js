const express = require("express");
const router = express.Router();
const db = require("../../models");

// router.get("/member/:memberid", (req, res) => {
//    console.log("in memberid html route");
//    // get comments from db and send to template
//    // res.render("member",[]);
//    return Promise.all(
//       [

//          db.Member.findAll({
//             where: {
//                id: req.params.memberid
//             }
//          }),
//          db.Member.findAll({})
//       ]).then(data => res.render("member", {members: data[1], selectedMember: data[0]}))
  
//       .catch(err => {
//          res.status(500);
//          next(err);
//       });
// });

router.get("/member", (req, res) => {
   console.log("in member html route");
   // get comments from db and send to template
   // res.render("member",[]);
   return Promise.all([
      db.Member.findAll({
      })
   ]).then(data => res.render("member", {members: data[0]}))
  
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
