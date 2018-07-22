// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds an array of information on friend compatibility data.
var friendsData = require("../data/friends.js");


// ROUTING
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to a Javascript array.
    // (ex. User fills out a survey... this data is then sent to the server.
    // Then the server saves the data to the friendsData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        //When we find the perfect friend match, we need an object to hold the match.
        var perfectFriend = {
            name: "",
            photo: "",
            scoreDifference: 200
        }

        // Note the code here. Our "server" will respond to requests.
        // req.body is available since we're using the body-parser middleware
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newUser = req.body;
        var newUserPhoto = req.body.photo;
        var newUserName = req.body.name;
        var newUserScores = req.body.scores;

        //After we parse the newuser data from survey...
        console.log(newUser);

        //Need to create a variable to hold the total difference in scores between the new user and the existing friends we are comparing.
        var totalDifference = 0;

        //Loop through the friendsData array to find the perfect friend.
        for (var i = 0; i < friendsData.length; i++) {
            //Each time we loop through, set the difference in scores back to 0.
            totalDifference = 0;
            console.log("Friend: " + friendsData[i].name);
            //Create another loop that goes through the scores of each friend in the array.
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                //Determine absolute value difference between scores.
                //Add difference in scores for each question to the totalDifference variable.
                totalDifference += Math.abs(parseInt(newUserScores[j]) - parseInt(friendsData[i].scores[j]));

                //If the total difference is less than the difference of the current perfectFriend, set this friend as the perfectFriend.
                if (totalDifference < perfectFriend.scoreDifference) {
                    perfectFriend.name = friendsData[i].name;
                    perfectFriend.photo = friendsData[i].photo;
                    perfectFriend.scoreDifference = totalDifference;

                    console.log("Perfect Friend:" + perfectFriend.name);
                }
            }
            console.log("Difference in scores: " + totalDifference);
        }

        //After we find a match for the new user (the friend with the lowest score difference), push the user to the friendsData array.
        friendsData.push(newUser);

        //Return the friend match as json so that we can display the match to the user in the html.
        res.json(perfectFriend);
    });
}