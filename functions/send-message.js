const express = require("express")
const cors = require("cors")
const serverless = require("serverless-http")

var app = express()
app.use(cors())

// var port = process.env.PORT || 5000
const router = express.Router()

router.get("/", function (req, res) {
	console.log("hi wordl")
	res.status(200).json({
		status:200,
		response: 'Ok'
	})
})


router.get("/si", function (req, res) {
	console.log("hiiii")
	res.status(200).json({
		status:200,
		response: 'Ok'
	})
})

// Iniciar servidor
app.use('/.netlify/functions/send-message', router)
module.exports = serverless(app)
// app.listen(port);