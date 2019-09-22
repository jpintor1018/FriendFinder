var path = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(path)
      });

      //userData = req (survey.html)

      app.post("/api/friends", function(req,res){
        var friend = {
          name:"",
          photo:"",
        };
        var newUser = req.body;
        var newScores = newUser.scores;
        var newName = newUser.name;
        var newPhoto = newUser.photo;
        
        for(var i=0;i<path.length;i++){
          console.log(path[i].name)
          var scoreDiff = 0;

          for (var j=0;j<10;j++){
            scoreDiff += Math.abs(parseInt(newScore[j])-parseInt(path[i].scores[j]));
          }
        }
          path.push(req.body)
          res.json(true)

      }
        )
}