var Spotify= require(`node-spotify-api`)
var keys=require("./keys")
// console.log.apply(keys)
var spotify= new Spotify(keys.spotify)
// console.log(keys)
function songs(song){
this.name=song.name
this.artist=[]
song.artists.forEach(element => {
  this.artist.push(element.name)
});
this.preview=song. preview_url
this.album=song.album.name
}
var track=require(`./liri`)
spotify
.search({type:`track`,query: track})
.then(function(response,err){

if(err){

    // console.log(err)
}
// console.log(response)
// console.log(response.tracks.items[0])
response.tracks.items.forEach(element=>{
    // console.log(element)
  var song=new songs(element)
    console.log(song)


})


})


