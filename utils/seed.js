const config = require ("../config/");
const db = require ("../models/");
module.exports = function() {
   if (config.sync === true) {
      console.log("\n🚀 init table seed");
      return [db.Group.bulkCreate([
         {group_name:"Javascript"},
         {group_name:"CSS & SASS"},
         {group_name:"Python"},
         {group_name:"Express"},
         {group_name:"Node"},
         {group_name:"Bootstrap"},
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
            group: "Javascript"
      
         },{
            first_name:"Jenna",
            last_name:"Smith",
            social_handle:"https://twitter.com/JennaSmith",
            zip_code:"60614",
            description:"Group 3",
            img_url:"#",
            group: "Python"
      
         },{
            first_name:"John",
            last_name:"Smith",
            social_handle:"https://twitter.com/JohnSmith",
            zip_code:"48170",
            description:"Group 3",
            img_url:"#",
            group: "Node"
      
         },

      ])
         .then(()=> {
            console.log("seed the database");
         })
         .catch((err) => {
            console.log(err);
         }),
      
      db.UpcomingEvents.bulkCreate([
         {
            event_group:"Group1",
            event_title:"Event1",
            event_date:"2020-11-14",
            event_url:"https://event.com"
      
         },
         {
            event_group:"Group2",
            event_title:"Event2",
            event_date:"2020-11-24",
            event_url:"https://event2.com"},
      
         
      ])
         .then(()=> {
            console.log("seed the database");
         })
         .catch((err) => {
            console.log(err);
         })
      
      ];
      
   }
   return Promise.resolve();
};
