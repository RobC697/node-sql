const {Client} = require('pg');

const client = new Client({
	user: 'postgres',  
	password: 'postgres',
	host: 'localhost',
	port: 5433 , //this is not the default port, default is 5432
	database: 'yodafoot'

});
//this is a test

client.connect()
.then(() => console.log('Connected Successfully'))
.then(() => client.query("SELECT * FROM test WHERE vulnerability = 'None';"))
.then(results => console.table(results.rows))
.then(() => client.query("INSERT INTO javatest (person, age) VALUES ($1, $2)", ['John', 69]))
.then(() => client.query("SELECT * FROM javatest;"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end());