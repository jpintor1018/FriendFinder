var path = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(path)
      });

      //userData = req (survey.html)

      app.post("/api/friends", function(req,res){
          path.push(req.body)
          res.json(true)
      }
        )
}