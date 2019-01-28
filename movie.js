var request=require(`request`)
var liri_initial=require(`./liri.js`)
var movieName=""
if(liri_initial===``){
    movieName=" Mr.+Nobody"
    console.log(`pls enter a movie to search`)
}
else{
let liri=liri_initial.split(" ")
for (var i = 0; i < liri.length; i++) {

    if (i > 0 && i < liri.length) {
      movieName = `${movieName}+${liri[i]}`;
    }
    else {
      movieName += liri[i];
  
    }
  }
}

function movie(movie){
    
    this.title=movie.Title
    this.year=movie.Year
    this.imdb_rating=movie.imdbRating
    if(movie.Ratings[1]!=undefined){
        this.rotten_tomato_rating=movie.Ratings[1].Value
    }
    this.country=movie.Country
    this.language=movie.Language
    this.plot=movie.Plot
    this.actors=movie.Actors
}

request
.get(`http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`,function(err,body){
        if (err){

            console.log(err)
        }
      
        var movie_data= new movie(JSON.parse(body.body))
        console.log(movie_data)
     


})