//./models/db.js

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

