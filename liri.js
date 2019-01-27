var fs = require(`fs`)
var task = process.argv[2]
var search = ``


fs.appendFile(`log.txt`,"process.argv.slice[2]",function(err){
    console.log(err)

})
if (task === "do-what-it-says") {
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
    commands(task, search)
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