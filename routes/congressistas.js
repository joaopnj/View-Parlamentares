module.exports = (app) => {
    var congressistas = app.controllers.congressistas;
    
	// methods de HTTP, GET, POST, PUT , DELETE
    app.get ("/congressistas", congressistas.index);
}