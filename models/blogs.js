'use strict';
module.exports = (sequelize, DataTypes) => {
  const blogs = sequelize.define('blogs', {
    title: DataTypes.STRING,
    authorid: DataTypes.INTEGER,
    categoryid: DataTypes.INTEGER,
    body: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {});
  blogs.associate = function(models) {
    // associations can be defined here
    blogs.belongsTo(models.authors,{foreignKey:authorid});
    blogs.belongsTo(models.categories,{foreignKey:categoryid})

  };
  return blogs;
};