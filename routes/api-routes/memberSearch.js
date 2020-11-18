const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /member


router.get("/memberSearch:memberid", function(req, res, next) {
   console.log("In member seach api routes");
   db.Group.findAll({
      // where : {
      //     first_name : "",
      //     last_name : 
      // }
   })
      .then(result => {
         res.json(result);
      }
      ) .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;