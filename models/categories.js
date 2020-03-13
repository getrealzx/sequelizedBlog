'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    Name: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    categories.hasMany(models.blogs,{foreignKey:categoryid})

  };
  return categories;
};