module.exports = function(sequelize, DataTypes) {
   const Group = sequelize.define("Group", {
      group_name: {
         type: DataTypes.STRING
      },
      group_blub :{
         type: DataTypes.STRING
      }
   });
   Group.associate = function(model) {
       
      Group.belongsToMany(model.Member, { through: model.Followers });
 
   };

   // Profile.belongsToMany(User, { through: User_Profile });
   return Group;
};
