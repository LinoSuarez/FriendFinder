var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var name = req.body.name;
    var photo = req.body.photo;
    var scores = req.body["scores[]"];

    ///Convert strings to numbers
    var scores = scores.map(function(num){
        return parseInt(num)
    })


    
    var arr = [];

    for (var i = 0; i < friends.length; i++){

        var arrayReduced = [];
        for (var x = 0; x < friends[i].scores.length; x++){
            arrayReduced.push(Math.abs(scores[x] - friends[i].scores[x]));
        }
        arr.push(arrayReduced.reduce(function(prev, curr){
            return prev + curr;
        }))

    }
    var min = Math.min.apply(Math, arr)
    var index = arr.indexOf(min);

    console.log(friends[index].photo)

    friends.push({
        name: name,
        photo: photo,
        scores: scores
    })
    res.json({
        name: friends[index].name,
        photo: friends[index].photo
    });
  });

};
