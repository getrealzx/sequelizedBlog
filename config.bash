# sequelize model:generate --name authors --attributes Name:string,bio:string,imgURL:string
# sequelize model:generate --name categories --attributes Name:string
sequelize model:generate --name blogs --attributes title:string,authorid:integer,categoryid:integer,body:string,summary:string