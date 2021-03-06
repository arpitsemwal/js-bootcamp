// Read existing notes from local storage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const renderedNote = document.createElement('div')
    const textElement = document.createElement('span')
    const removeButton = document.createElement('button')

    removeButton.textContent = 'x'

    renderedNote.appendChild(removeButton)

    if(note.title.length > 0) {
        textElement.textContent = note.title
    }
    else {
        textElement.textContent = 'Unnamed title'
    }
    renderedNote.appendChild(textElement)

    return renderedNote
}

// Render notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note) {
        const renderedNote = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(renderedNote)
    })
}

// Save notes to local storage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
