require("dotenv").config();

var keys = require("./keys.js");

// access your keys information like so

var spotify = new Spotify(keys.spotify);