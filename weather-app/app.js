const request = require('request')

const url = 'https://api.darksky.net/forecast/e39d7d10ad3c69f1cd77197a9c1477fd/37.8267,-122.4233'

request({ url: url}, (error, response) =>{
    const data = JSON.parse(response.body)
    console.log(data.currently)
} )
