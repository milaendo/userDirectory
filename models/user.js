let mongoDB = require("mongodb")
let mongoclient = mongoDB.MongoClient
let url = "mongodb://localhost:27017/linkedIn4Bots"
let dbConn = null
//coonect to our database and save that connection to a var so we can use it 
mongoclient.connect(url,function(error,db){
	if (error){
		console.log("everything is Not okay",error)
	}
	else {
		dbConn = db 	
	}
})

function getAllUsers(cb){
	dbConn.collection('users').find().toArray(function(error,documents){
		cb(documents)
	})
}

function getUserById(id,cb) {
		console.log(id)
		let query = {"id":id}
		console.log(query);
		dbConn.collection('users').findOne(query, function(error,obj){
			if (error) {
				console.log("no users")
			}else {
				
				console.log(cb)
				cb(obj)
			}

		})
			
}
module.exports = {
	getAllUsers: getAllUsers,
	getUserById: getUserById

}