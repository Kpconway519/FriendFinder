//get route to survey which should display the survey page
//default route which shows the home page

var path = require("path")

module.exports = function(app) {

    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    
    
}


///Users/kevinconway/Desktop/FriendFinder/app/routing/app/public/home.html

