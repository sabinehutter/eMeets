module.exports = function(sequelize, DataTypes) {
   const Member = sequelize.define("Member", {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      joined_group: {
         type: DataTypes.INTEGER
      },
      first_name :{
         type: DataTypes.STRING
      }, 
      last_name :{
         type: DataTypes.STRING
      }, 
      social_handle :{
         type: DataTypes.STRING
      }, 
      zip_code :{
         type: DataTypes.INTEGER
      }, 
      description :{
         type: DataTypes.STRING
      },
      email_address :{
         type: DataTypes.STRING
      }, 
      img_url :{
         type: DataTypes.STRING
      }, 
      group :{
         type: DataTypes.STRING
      }, 
   });

   Member.associate = function(model) {
       
      Member.belongsToMany(model.Group, { through: model.Followers });
 
   };
   return Member;
};
