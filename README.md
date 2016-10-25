# costume-party

# 1. SQL Commands for creating database + usesr
we create a db for a specific user in the db for that project.  htis is for security purposes!
```
create database costume_party;
create user 'tina'@'localhost' identified by 'yellowpencil';
grant all privileges on costume_party.* to 'tina'@'localhost';
```
## 2. environment variables
Our environment variables are stored in .env but may also be declared as needed.
```
DB_USER=tina
DB_PWD=yellowpencil
DB_NAME=costume_party
DB_TYPE=mysql
DB_SERVER=localhost
````

##3
A DATABASe connnection is defined inside of a db.js. it contains all needed code to connecy to mysql

````


'use strict';

//this loads environment variables from .env
require('dotenv').config();

//knex is a database adaptor for node
//npm install knex --save && npm install lodash --save
//lodash is a dependency of knex--with lodash knex will not work
var db = require('knex')({
	client: process.env.DB_TYPE,
	connection: {
		host: process.env.DB_SERVER,
		user: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME
	}
});
module.exports = db;
``````