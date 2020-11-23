const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /member

router.post("/newMemberRegister",function(req, res, next){
   db.Member.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      group: req.body.group,
      social_handle: req.body.social_handle,
      zip_code: req.body.zip_code,
      description: req.body.description
      
   })
      .then (()=>{
         res.redirect ("/member");
      }
         // created 
         //  redirect res.redirect ("/members")
      ).catch(err =>{
         res.status(500);
         next(err);
      });
});
module.exports = router;
// POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//    db.Post.create(req.body).then(function(dbPost) {
//      res.json(dbPost);
//    });
//  })