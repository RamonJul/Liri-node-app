var Spotify = require(`node-spotify-api`)
var keys = require("./keys")
var log=require("./log")
var spotify = new Spotify(keys.spotify)
var song = ``
var song_spotify = {
  check: function (search) {
    if (search.length <= 3) {
      song = "The sign"
      console.log(`pls enter a song`)
      log("spotify-this-song","non")
    } else {
      for (let i = 3; i < search.length; i++) {

        if (i > 3 && i < search.length) {
          song = `${song}+${search[i]}`;
        } else {
          song += search[i];

        }
      }
      log("spotify-this-song",song)
    }
    song_spotify.search()
  },
  songs: function (song) {
    this.name = song.name
    this.artist = []
    song.artists.forEach(element => {
      this.artist.push(element.name)
    });
    this.preview = song.preview_url
    this.album = song.album.name
  },
  search: function () {
    console.log(`this is the ${song}`)
    spotify
      .search({
        type: `track`,
        query: song
      })
      .then(function (response, err) {
        if (err) {}
        response.tracks.items.forEach(element => {
          var song_data = new song_spotify.songs(element)
          console.log(song_data)
        })
      })
  }

}

var search = require(`./liri`)



module.exports = song_spotify