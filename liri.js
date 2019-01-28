var fs = require(`fs`)
var task = process.argv[2]
var search = ``



if (task === "do-what-it-says") {
    log(task,null)
    fs.readFile(`random.txt`, `utf8`, function (err, data) {
        if (err) {
            return console.log(err)

        }
        var output = data.split(" ")
        task = output[0]
        for (var i = 2; i < output.length; i++) {
            search = `${search} ${output[i]}`
        }
        commands(task, search)
    })

} else {
    for (var i = 3; i < process.argv.length; i++) {

        if(i===3){
            search=process.argv[i]

        }
        else{
        search = `${search} ${process.argv[i]}`
        }
    }
    log(task,search)
    commands(task, search)
}
function log( task,term){
    fs.appendFile(`log.txt`,` ${task} ${term} `,function(err){
        console.log(err)
    
    })   


}
function commands(task, search) {
    module.exports = search
    switch (task) {

        case "concert-this":

            var bands = require("./bands.js")
            break;
        case "spotify-this-song":
            //spotify.js
            var song = require(`./spotify.js`)
            break;
        case "movie-this":
            //movie.js
            var movie = require("./movie.js")
            break;
    }
}