const	pgPromise	= require('pg-promise')
		pgp			= pgPromise({ schema: "BDLogSoporte" }),
		postgresDB	= pgp({
			host					:'ep-rough-hat-a5n0tgnh.us-east-2.aws.neon.tech',
			port					:5432,
			database				:'culqiTest',
			user					:'culqiTest_owner',
			password				:'XD4Fja9lqdMS',
			max						: 30,
			ssl						: true,
			idleTimeoutMillis		: 360000,
			connectionTimeoutMillis	: 360000
		})


export async function handler() {
	try {
		await postgresDB.oneOrNone(`INSERT INTO test(test) VALUES($1)`, ['hi']).then((res) => res)
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Mensaje enviado correctamente' })
		};
	} catch (error) {
		console.error(error);

		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Error al enviar el mensaje' })
		};
	}
}