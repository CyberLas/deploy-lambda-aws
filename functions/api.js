const	cors		= require("cors")
const	express		= require("express")
const	serverless	= require("serverless-http")

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


app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
// app.listen(port);
