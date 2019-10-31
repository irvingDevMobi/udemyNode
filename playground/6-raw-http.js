const https = require('https')
const url = 'https://api.darksky.net/forecast/e39d7d10ad3c69f1cd77197a9c1477fd/40.0,70.0'

const request = https.request(url, (response) => {
    let data  = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
