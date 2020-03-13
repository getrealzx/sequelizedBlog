let db = require('./models/index.js'); // or ..models
// let sequelize = require('sequelize'); // or let sequelize = db.sequelize;
let sequelize = db.sequelize;


db.authors.create({
    Name:'Dr. Phil',
    bio:"a wise guy",
    imgURL:""
})