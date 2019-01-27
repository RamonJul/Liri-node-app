var request=require(`request`)
var moment=require(`moment`)
function events( venue,date){
    this.name=venue.name
    this.country=venue.country
    this.city=venue.city
    this.date=moment(date).format(`MM/DD/YY`)

}
var artists=require("./liri.js")
request
.get(`https://rest.bandsintown.com/artists/${artists}/events?app_id=codingbootcamp`,function(response ,err,body){
        if (err){

            // console.log(err)
        }
        JSON.parse(body).forEach(element => {
         var filtered_event=new events(element.venue,element.datetime)
            console.log(filtered_event)
        });
       
})