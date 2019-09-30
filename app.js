const validator = require('validator')
const getNotes = require("./notes.js")
const chalk = require('chalk')

const message = getNotes()

console.log(message)

console.log(validator.isEmail("nirving21@gmail.com"))
console.log(validator.isEmail("irvingAtgmail.com"))

console.log(chalk.green("Success.."))
console.log(chalk.bold("This letter is bold"))
console.log(chalk.inverse.green("Green background"))
