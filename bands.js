var request = require(`request`)
var moment = require(`moment`)
var log=require("./log")
var artists = ""
var bands = {
    format: function (search) {
        if (search.length <=3) {

            console.log(`pls enter for an artis or a group`)
            log("concert-this","non")
        } else {
            for (var i = 3; i < search.length; i++) {

                if (i === 3) {
                    artists = search[i]

                } else {
                    artists = `${artists} ${search[i]}`
                }

            }
            log("concert-this",artists)
            bands.search()
        }

    },
    events: function (venue, date) {
        this.name = venue.name
        this.country = venue.country
        this.city = venue.city
        this.date = moment(date).format(`MM/DD/YY`)

    },
    search: function () {
        request
            .get(`https://rest.bandsintown.com/artists/${artists}/events?app_id=codingbootcamp`, function (response, err, body) {
                if (err) {

                    // console.log(err)
                }
                JSON.parse(body).forEach(element => {
                    var filtered_event = new bands.events(element.venue, element.datetime)
                    console.log(filtered_event)
                });

            })


    }
}

module.exports = bands