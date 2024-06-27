const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")

var app = express()
app.use(cors())

var port = process.env.PORT || 5000
const router = express.Router()

router.get("/my-top-5-power-rangers-seasons", function (req, res) {
	console.log("hiiii")
	res.json({
		status:200,
		response: 'Ok'
	})
})

// Iniciar servidor
app.use('/.netlify/functions/send-message', router)
export const handler = serverless(app)
// app.listen(port);