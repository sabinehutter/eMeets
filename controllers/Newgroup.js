const orm = require("../config/orm.js");

const burger = {
   all: function(cb) {
      orm.all("group", (res) => {
         cb(res);
      });
   },
   create: function(name, cb) {
      orm.create("group", [
         "group_name", "created"
      ], [
         name, false
      ], cb);
   },
   update: function(id, cb) {
      const condition = "id=" + id;
      orm.update("group", {
         created: true
      }, condition, cb);
   }
};

module.exports = group;
