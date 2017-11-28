module.exports = (app) => {
    var tweets = app.controllers.tweets;
    
	// methods de HTTP, GET, POST, PUT , DELETE
    app.get ("/tweets", tweets.index);
}