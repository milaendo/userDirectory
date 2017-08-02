const express = require('express')
const router = express.Router()
const userModel = require('./models/user')
//require mongodb and initalze it
router.get("/", function(req, res, next){
	userModel.getAllUsers(function(data){
  		res.render("index", {users:data})
  	})
})

router.get('/user/:id', function(req, res, next){
	let id = parseInt(req.params.id)
	userModel.getUserById(id, function(user) {
		res.render("user", user)
	})
	
})

//read from the database and display the results
module.exports = router