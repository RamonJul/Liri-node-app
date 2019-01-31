var fs = require(`fs`)
module.exports=function(task, search) {
    fs.appendFile(`log.txt`, ` ${task} ${search} `, function (err) {
        console.log(err)
    })
}
