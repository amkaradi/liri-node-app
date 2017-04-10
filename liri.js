// ~How to do the HW~
// 1.Make a .gitignore file (Done!)
// 2.Make a JavaScript file named keys.js. Do Not add this file to the .gitignore (Done!)
// 3.Get your Twitter API keys (Done!)
// 4.Make a file called random.txt ....why am I doing this?.... (Done!)
// 5.Make a JavaScript file named liri.js  Put all your code in this file (Done!)
// 6.At the top of the liri.js file, write the code you need to grab the data from keys.js (Done!)
// 7.Then store the keys in a variable (Done!)
// 8.Make it so liri.js can take in one of the following commands:
// 	- Twitter (Done!)
// 	- Spotify
// 	- Movie
// 	- Do-what-it-says

// *** Guide: https://github.com/slsriehl/liribot ***

// Load the NPM Packages:
// var request = require("request");
// var doWhatItSays = require("doWhatItSays");


var keys = require('./keys.js');
var querystring = require('querystring'); //A querystring is a set of characters input to a computer or Web browser and sent to a query program to recover specific information from a database.
var output;

// Make code readable
var util = require('util');

function prettyPrint(obj, depth) {
    console.log(util.inspect(obj, { colors: true, depth: depth || 1 }));
}

// Twitter HW
// for (i = 0; i < cars.length; i++)
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);
var params = { screen_name: 'KaradiVonKoffle' };

function getTweets() {
    client.get('statuses/user_timeline', params, function(error, tweets) {
        // tweet contains an array of tweet objects and the error might containan error object if anything goes wrong
        if (!error) {
            for (var i = 0; i < tweets.length; i = i + 1) {
                console.log(tweets[i].text);
            }
        } else {
            console.log('twitter is hiccuping!  Chirp, kheerp, chirp, kheerp,...');
        };
    });
}
// end of Twitter HW


// Spotify HW
// Sandy Nelson - Let There Be Drums
// https://www.youtube.com/watch?v=zC9okWm8A6o
// 'spotifySong': function(keyword) {

// }


var command = process.argv[2];
var argument = process.argv[3];
var spotify = require("spotify");

if (command === "spotify-this-song") {
    spotifyThisSong(argument);
} else if (command === "get-my-tweets") {
    getTweets();
} else if (command === "get-my-binge-on") {
	movieThis(argument)
}

function spotifyThisSong(song) {
    if (!error) {
        spotify.search({ type: 'track', query: song }, function(error, data) {
            output = ('\nSong Info \n\nArtist: ' + artistConcat + '\n\nSong Title: ' + thisSong.name + '\n\nOriginal Album: ' + thisSong.album.name + '\n\nPreview: ' + thisSong.preview_url + '\n');
            console.log(output);
            append.logData(data);
        });
    } else {
        console.log('Spotify is tuned out and cannot find your song');
    }

}
// end of Spotify HW


// Movie HW
// movie: The Intouchables
// movie API http://www.omdbapi.com/
function movieThis(movie) {
    var queryUrl = 'http://www.omdbapi.com/?t=' + movie;
    if (!error) {
        'The Intouchables';
        request(queryUrl, function(error, response) {
            if (!error && response.statusCode == 200) {
                output = ('\nMovie Info \n\nTitle: ' + JSON.parse(body)['Title'] + '\n\nRelease Date: ' + JSON.parse(body)['Released'] + '\n\nIMDB Rating: ' + JSON.parse(body)['imdbRating'] + '\n\nProduction Country: ' + JSON.parse(body)['Country'] + '\n\nLanguage: ' + JSON.parse(body)['Language'] + '\n\nSynopsis: ' + JSON.parse(body)['Plot'] + '\n\nActors: ' + JSON.parse(body)['Actors'] + '\n\nRotten Tomatoes Rating: ' + JSON.parse(body)['tomatoRating'] + '\n\nLearn more at Rotten Tomatoes: ' + JSON.parse(body)['tomatoURL'] + '\n');
                console.log(output);
                append();
            } else {
                console.log('omdb error or nothing matches your search.');
            }
        });
    }




}
// end of Movie HW


// HW Do what it says
// How do I program this???.... >.<
