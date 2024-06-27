const { Client } = require('pg')

const postgresDB = new Client({
	host: 'ep-rough-hat-a5n0tgnh.us-east-2.aws.neon.tech',
	port: 5432,
	database: 'culqiTest',
	user: 'culqiTest_owner',
	password: 'XD4Fja9lqdMS',
	ssl: true,
})

async function handler(event, context) {
	try {
		await postgresDB.connect();
		await postgresDB.query('INSERT INTO test(test) VALUES ($1)', ['hi']);
		await postgresDB.end();
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Cron job executed successfully' }),
		}
	} catch (error) {
		console.error(error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Error executing cron job' }),
		}
	}
}

exports.handler = handler
