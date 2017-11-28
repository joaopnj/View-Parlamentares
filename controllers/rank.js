module.exports = (app) => {
    
    var Tweets       = app.models.tweet;
    var Congressista = app.models.congressistas;


    var RankController = {  
        index: (req,res) => {
            Congressista.find( (err, data) => {
                err ? console.log(err) : res.render("rank/index", {lista: data, breadscrumb : 'Rank'});
            }).sort({'pontuacao' : -1});
        }           
    }
    
    return RankController;
}