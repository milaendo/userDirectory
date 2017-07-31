const data = require('../data')

function getAllUsers(){
	return data
}

function getUserById(id) {
		console.log(id)

	var user = data.users.filter(function(item){
		if (item.id == id) {
			return true
		} else {
			return false
		}
	})[0]
	return user
}
module.exports = {
	getAllUsers: getAllUsers,
	getUserById: getUserById

}