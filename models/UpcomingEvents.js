module.exports = function(sequelize, DataTypes) {
   const UpcomingEvents = sequelize.define("UpcomingEvents", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      event_group: {
         type: DataTypes.STRING
      },
      event_title :{
         type: DataTypes.STRING
      },
      event_date :{
         type: DataTypes.DATE
      },
      event_url :{
         type: DataTypes.STRING
      }
   });
   UpcomingEvents.associate = function(model) {
       
      UpcomingEvents.belongsTo(model.Group);
 
   };
 
   return UpcomingEvents ;
};