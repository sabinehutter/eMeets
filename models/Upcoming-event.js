module.exports = function(sequelize, DataTypes) {
   const upcoming_events = sequelize.define("upcoming_events", {
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
   return upcoming_events ;
};