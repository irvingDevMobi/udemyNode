const validator = require('validator')
const getNotes = require("./notes.js")

const message = getNotes()

console.log(message)

console.log(validator.isEmail("nirving21@gmail.com"))
console.log(validator.isEmail("irvingAtgmail.com"))
