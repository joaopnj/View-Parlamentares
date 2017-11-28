module.exports = (app) => {
    
    var Congressista = app.models.congressistas;
    
    var CongressistaController = {  
        index: (req,res) => {
			Congressista.find((err,data) => {
                console.log(data);
                if (err) console.log(err);
                res.render("congressistas/index", {lista: data, breadscrumb : 'Congressistas'});
			});
        }
            
    }
    
    return CongressistaController;
}