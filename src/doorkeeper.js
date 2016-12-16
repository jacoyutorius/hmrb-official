var request = require("superagent");
var jsonp = require("superagent-jsonp");

exports.getEvents = function(token, since, callback){
	var url = "https://api.doorkeeper.jp/groups/hmrb/events";
	request.get(url)
		.set('X-API-Key', token)
		.set('Accept', 'application/json')
		.query({since: since})
		.use(jsonp({timeout: 3000}))
		.end(function(err, res){
			callback(err, res);
		});
};