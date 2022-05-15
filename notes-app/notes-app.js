// DOM - Document object Model
const notes = [{
    title: 'Note 1',
    body: 'Body 1'
}, {
    title: 'Note 2',
    body: 'Body 2'
}, {
    title: 'Note 3',
    body: 'Body 3'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note) {
        const renderedNote = document.createElement('p')
        renderedNote.textContent = note.title
        document.querySelector('#notes').appendChild(renderedNote)
    })
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {  //input event is fired at every char change
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {  //input event is fired at every char change
    console.log(e.target.value)
})