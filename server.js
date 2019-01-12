const express = require("express")
const path = require("path") 
const fs = require("fs")
const app = express()


var PORT = 9001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// module.exports = mainPagePath, surveyPath;

//Place for my HTML routing from the htmlRoutes file
let htmlRoute = require("./app/routing/htmlRoutes.js");
htmlRoute(app)

let apiRoute = require("./app/routing/apiRoutes.js")
apiRoute(app)
// require("app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


module.exports = express, path, fs, app;