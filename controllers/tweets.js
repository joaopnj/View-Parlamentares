module.exports = (app) => {
    
    var Tweets = app.models.tweet;
    
    var TweetController = {  
        index: (req,res) => {
			Tweets.find((err,data) => {
                if (err) console.log(err);
                res.render("tweets/index", {lista: data, breadscrumb : 'Tweets'});
			});
        }           
    }
    
    return TweetController;
}