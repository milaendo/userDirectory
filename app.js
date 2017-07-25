const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express');
const data = require('./data')

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))

app.get("/", function(req, res, next){
  res.render("index", data)
})

app.get('/user/:id', function(req, res, next){
	console.log(req.params.id)

	var user = data.users.filter(function(item){
		if (item.id == req.params.id) {
			return true
		} else {
			return false
		}
	})[0]

	res.render("user", user)
})

app.listen(3000, function(){
  console.log("App running on port 3000")
})