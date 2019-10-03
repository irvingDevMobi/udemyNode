const fs = require('fs')

/*  // Create file 
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJson = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJson)
 */

// Read file

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
console.log(data.title)
