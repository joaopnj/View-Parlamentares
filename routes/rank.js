module.exports = (app) => {
    var rank = app.controllers.rank;
    
	// methods de HTTP, GET, POST, PUT , DELETE
    app.get ("/rank", rank.index);
}