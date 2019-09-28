var path = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(path)
      });

      //userData = req (survey.html)

      app.post("/api/friends", function(req,res){
        var userMatch = req.body;
        var total=0;
        var friendMatch = {
          name:"",
          photo:"",
          score:1000
        }
        for(var i=0;i<path.length-1;i++){
          // console.log(path[i].name)
          var total = 0;

          for (var j=0;j<10;j++){
           total += Math.abs(parseInt(path[i].scores[j])-parseInt(userMatch.scores[j]));
           if(total <= friendMatch.score){
             friendMatch.name=path[i].name,
             friendMatch.photo=path[i].photo,
             friendMatch.score=total
           }
          }
        }
          path.push(friendMatch)
          res.json(friendMatch)
          console.log(friendMatch)

      }
        )
}