const config = require ("../config/");
const db = require ("../models/");
module.exports = function() {
   if (config.sync === true) {
      console.log("\n🚀 init table seed");
      return [db.Group.bulkCreate([
         {group_name:"Group 1"},
         {group_name:"Group 2"},
         {group_name:"Group 3"},
         {group_name:"Group 4"},
         {group_name:"Group 5"},
         {group_name:"Group 6"},
      ])
         .then(()=> {
            console.log("seed the database");
         })
         .catch((err) => {
            console.log(err);
         }),
      db.Member.bulkCreate([
         {
            first_name:"Charlie",
            last_name:"Olivia",
            social_handle:"https://twitter.com/IngrahamAngle",
            zip_code:"11201",
            description:"Group 2",
            img_url:"#",
      
         },

      ])
         .then(()=> {
            console.log("seed the database");
         })
         .catch((err) => {
            console.log(err);
         }),];
      
   }
   return Promise.resolve();
};
