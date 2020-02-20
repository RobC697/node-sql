const {Client} = require('pg');

const client = new Client({
	user: 'postgres',  
	password: 'postgres',
	host: 'localhost',
	port: 5433 , //this is not the default port, default is 5432
	database: 'yodafoot'



});

client.connect()
.then(() => console.log('Connected Successfully'))
.then(() => client.query('SELECT * FROM test;'))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end());