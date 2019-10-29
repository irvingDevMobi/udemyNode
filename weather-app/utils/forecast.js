const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e39d7d10ad3c69f1cd77197a9c1477fd/' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('unable to find location')
        } else {
            const today = response.body.currently
            callback(undefined, 'It is currently ' + today.temperature + ' degress out. There is a '
                + today.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
