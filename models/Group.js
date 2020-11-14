module.exports = function(sequelize, DataTypes) {
   const Group = sequelize.define("Group", {
      group_name: {
         type: DataTypes.STRING
      },
      group_blub :{
         type: DataTypes.STRING
      }
   });
   return Group;
};