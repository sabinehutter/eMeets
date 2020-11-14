const express = require("express");
const router = express.Router();
const db = require("../../models");

// /api/commnet/create 
// post comment route -> back to index
// router.post("/create", (req, res, next) => {
//    db.Group.create(req.body)
//       .then(newComment => {
//          console.log(newComment);
//          res.redirect("/");
//       // optionally return data created
//       // res.json(newComment)
//       })
//       .catch(err => {
//          res.status(500);
//          next(err);
//       });
// });

router.get("/", function(req, res, next) {
   db.Group.findAll({})
      .then(result => {
         console.log(result);
         res.json(result);
      }
      ) .catch(err => {
         res.status(500);
         next(err);
      });
});

router.post ("/",function(req,res,next){
   db.User.create();
   // created 
   // redirect res.redirect ("/members")
});


module.exports = router;
