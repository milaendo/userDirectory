const express = require('express')
const router = express.Router()
const userModel = require('./models/user')


router.get("/", function(req, res, next){
	let data = userModel.getAllUsers()
  res.render("index", data)
})

router.get('/user/:id', function(req, res, next){
	let user = userModel.getUserById(req.params.id)
	res.render("user", user)
})
module.exports = router