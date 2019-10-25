const request = require('request')

const url = 'https://api.darksky.net/forecast/e39d7d10ad3c69f1cd77197a9c1477fd/37.8267,-122.4233'
const mapsApi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlydmluZzIxIiwiYSI6ImNrMjJjZzdrOTF0ODQzbXFvdzB2cTF2aHIifQ.A5PXu49KPC9cs61vir4x0A&limit=1'

request({ url: url, json: true }, (error, response) => {
    const today = response.body.currently
    console.log('It is currently ' + today.temperature + ' degress out. There is a '
        + today.precipProbability + '% chance of rain.')
})

request({ url: mapsApi, json: true }, (error, response) => {
    debugger
    if (error) {
        console.log('Unable to connect to location service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        if (!response.body.features || response.body.features.length == 0) {
            console.log('Unable to find location: ')
        } else {
            const point = response.body.features[0].geometry.coordinates
            console.log(point[0] + ',' + point[1])
        }
    }
})
