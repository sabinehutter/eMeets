module.exports = function(sequelize, DataTypes) {
   const Group = sequelize.define("Group", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      group_name: {
         type: DataTypes.STRING
      },
      group_blub :{
         type: DataTypes.STRING
      }
   });
   return Group;
};
