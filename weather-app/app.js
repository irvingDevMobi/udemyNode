const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

var myArgs = process.argv.slice(2)

if (myArgs.length > 0) {

    geocode(myArgs[0], (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log('You should provide a city: node app.js "MyCity"')
}
