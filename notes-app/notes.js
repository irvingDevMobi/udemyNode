const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes ..'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) =>
        note.title === title
    )

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note added!!!')
    } else {
        console.log('Note title taken, use a diferent title')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesFiltered = notes.filter((note) =>
        note.title !== title
    )
    if (notesFiltered.length != notes.length) {
        saveNotes(notesFiltered)
        console.log('Note Deleted!!!')
    } else {
        console.log('There is not note with that name')
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes:'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteTarget = notes.find((note) => note.title === title)
    if (noteTarget) {
        console.log(chalk.green.inverse(noteTarget.title))
        console.log(noteTarget.body)
    } else {
        console.log(chalk.red('There is not note with that name'))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
