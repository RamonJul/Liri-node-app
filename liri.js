var fs = require(`fs`)
var search = []
for (let i = 0; i < process.argv.length; i++) {
    search.push(process.argv[i])
}
var task = search[2]
commands()
function commands() {
    switch (task) {
        case "concert-this":
            var bands = require("./bands.js")
            bands.format(search)
            break;
        case "spotify-this-song":
            var song = require(`./spotify.js`)
            song.check(search)
            break;
        case "movie-this":
            var movie = require("./movie.js")
            movie.formating(search)
            break;
        case "do-what-it-says":
            var log=require("./log")
            log(task,null)
            fs.readFile(`random.txt`, `utf8`, function (err, data) {
                if (err) {
                    return console.log(err)
                }
                var output = data.split(" ")
                task = output[0]
                for (var i = 1; i < output.length; i++) {
                    search.push(output[i])
                }
                commands()
            })
            break;
    }
}