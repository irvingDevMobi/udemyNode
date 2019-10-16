const fs = require('fs')

const getNotes = function () {
    return 'Your notes ..'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
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

const removeNote = function(title) {
    const notes = loadNotes()
    const target = notes.filter(function (note) {
        return note.title === title
    })
    if (target.length > 0) {
        delete notes[title]
        saveNotes(notes)
        console.log('Note Deleted!!!')
    } else {
        console.log('There is not note with that name')
    }
}

const saveNotes = function (notes) {
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
    removeNote: removeNote
}
