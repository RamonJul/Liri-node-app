var request = require(`request`)
var log=require("./log")
var movieName = ""


var movie_search = {
    formating: function (search) {
        if (search.length <= 3) {
            movieName = "Mr.+Nobody"
            console.log(`pls enter a movie to search`)
            log("movie-this","non")
        } else {
            for (let i = 3; i < search.length; i++) {

                if (i > 3 && i < search.length) {
                    movieName = `${movieName}+${search[i]}`;
                } else {
                    movieName += search[i];

                }
            }
            log("movie-this", movieName)
        }
    
        this.search()
    },
    movie_construtor: function (movie) {

        this.title = movie.Title
        this.year = movie.Year
        this.imdb_rating = movie.imdbRating
        if (movie.Ratings[1] != undefined) {
            this.rotten_tomato_rating = movie.Ratings[1].Value
        }
        this.country = movie.Country
        this.language = movie.Language
        this.plot = movie.Plot
        this.actors = movie.Actors
    },
    search: function () {
        request
            .get(`http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`, function (err, body) {
                if (err) {

                    console.log(err)
                }

                var movie_data = new movie_search.movie_construtor(JSON.parse(body.body))
                console.log(movie_data)



            })

    }

}

module.exports = movie_search