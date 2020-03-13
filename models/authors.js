'use strict';
module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define('authors', {
    Name: DataTypes.STRING,
    bio: DataTypes.STRING,
    imgURL: DataTypes.STRING
  }, {});
  authors.associate = function(models) {
    // associations can be defined here
    authors.hasMany(models.blogs,{foreignKey:authorid})
  };
  return authors;
};