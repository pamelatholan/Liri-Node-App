## LIRI-Node-App
## HW 9

### LIRI - Language Interpretation and Recognition Interface
* Command line node app that takes in parameters and gives you back data
    * LIRI will search:
        * Spotify for songs
            * Enter in terminal: node liri.js spotify-this-song '<song name here>'
            * Return the following results:
                * Artist(s)
                * The song's name
                * A preview link of the song from Spotify
                * The album that the song is from
        * Bands in Town for concerts
            * Enter in terminal: node liri.js concert-this <artist/band name here>
                * Name of the venue
                * Venue location
                * Date of the Event (use moment to format this as "MM/DD/YYYY")
        * OMdB for movies
            * Enter in terminal: node liri.js movie-this '<movie name here>'
                * Title of the movie.
                * Year the movie came out.
                * IMDB Rating of the movie.
                * Rotten Tomatoes Rating of the movie.
                * Country where the movie was produced.
                * Language of the movie.
                * Plot of the movie.
                * Actors in the movie.


* Node packages used:
    * Node-Spotify-API
    * Axios
    * Moment
    * DotEnv
