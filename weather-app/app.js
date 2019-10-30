const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

var myArgs = process.argv.slice(2)

if (myArgs.length > 0) {

    geocode(myArgs[0], (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
} else {
    console.log('You should provide a city: node app.js "MyCity"')
}
