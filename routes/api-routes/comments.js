const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", function(req, res, next) {
   db.Group.findAll({})
      .then(result => {
         res.json(result);
      }
      ) .catch(err => {
         res.status(500);
         next(err);
      });
});


module.exports = router;
