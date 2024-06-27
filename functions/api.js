const	cors		= require("cors")
const	express		= require("express")
const	cron		= require('node-cron')
const	serverless	= require("serverless-http")
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

let app = express()
app.use(cors())


const router = express.Router()


router.get("/", (req, res) => {
	console.log("/")
	res.status(200).json({
		status:200,
		response: 'Ok'
	})
})


router.get("/si", (req, res) => {
	console.log("//")	
	res.status(200).json({
		status:200,
		response: 'Ok'
	})
})

const npmTest = async() => {
	console.log("WRITE")
	await postgresDB.oneOrNone(`INSERT INTO test(test) VALUES($1)`, ['hi']).then((res) => res)
}

cron.schedule('*/5 * * * * *', npmTest)
app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
// app.listen(port);
