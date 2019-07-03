## LIRI-Node-App
## HW 9

### LIRI - Language Interpretation and Recognition Interface
* Command line node app that takes in parameters and gives you back data
* LIRI will search:

* Spotify for songs
    * Enter in terminal: node liri.js spotify-this-song <'song name here'>
    * Return the following results:
        * Artist(s)
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from

![Spotify-This](https://github.com/pamelatholan/Liri-Node-App/blob/master/images/spotify-this.PNG)

* Bands in Town for concerts
    * Enter in terminal: node liri.js concert-this <artist/band name here>
    * Return the following results:
        * Name of the venue
        * Venue location
        * Date of the Event (use moment to format this as "MM/DD/YYYY")

![Concert-This](https://github.com/pamelatholan/Liri-Node-App/blob/master/images/concert-this.PNG)

* OMdB for movies
    * Enter in terminal: node liri.js movie-this <'movie name here'>
    * Return the following results:
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.

![Movie-This](https://github.com/pamelatholan/Liri-Node-App/blob/master/images/movie-this.PNG)

* If no movie is specified, Mr. Nobody results will return:



* Terminal command do-what-it-says will return results for song "I Want It That Way" as specified in the random.txt file:




* Node packages used:
    * Node-Spotify-API
    * Axios
    * Moment
    * DotEnv
    * Request
    * fs
