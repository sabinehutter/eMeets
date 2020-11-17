module.exports = function(sequelize, DataTypes) {
   const Followers = sequelize.define("Followers", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
   });

   return Followers;


};