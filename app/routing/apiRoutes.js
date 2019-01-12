var friendsInfo = require("../data/friends.js")


var path = require("path")

module.exports = function(app) {

    
    app.get("/api/friends", function(req, res) {
        res.json(friendsInfo)
    });
    
    app.post("/api/friends", function(req, res) {
       //take this thing and add it to the array

       friendsInfo.push(req.body)
    })
    
    
}





// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

















