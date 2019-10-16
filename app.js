const validator = require('validator')
const notes = require("./notes.js")
const chalk = require('chalk')
const yargs = require('yargs')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler() {
        console.log('Listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading notes')
    }
})

yargs.parse()
