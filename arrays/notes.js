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

//******************** Arrays basic methods ********************//
console.log('//******************** Arrays basic methods ********************//')

notes.push({    //adds element to the end
    title: 'Note 4',
    body: 'Body 4'
})
notes.pop() //pops the last element
notes.shift() //removes element from start
notes.unshift({ //adds element to the start
    title: 'Note 1',
    body: 'Body 1'
})

notes.splice(1, 2)  //start from index 1, remove 2 element
notes.splice(1, 0, {
    title: 'Note 2',
    body: 'Body 2'
}) //adds the element starting from index 1
notes.push({
    title: 'Note 3',
    body: 'Body 3'
})
notes.splice(2, 1, {
    title: 'Note 3',
    body: 'Body 3'
})    //starting from index 2, remove 1 element and then add a new element at index 2.
console.log(notes)


//******************** Iterating over arrays ********************//
console.log('//******************** Iterating over arrays ********************//')

for(let i=0; i<notes.length; i++) {
    console.log(notes[i])
}

notes.forEach(function(note, index) {
    console.log(`Index: ${index}, Value: ${note.title}, ${note.body}`)
})

let index = notes.findIndex(function(note, index) {
    return note.title === 'Note 3'
})
console.log(index)

//******************** Using find methods in array ********************//
console.log('//******************** Using find methods in array ********************//')

const findNoteOneWay = function(notes, noteTitle) { //Uses array.findIndex() method
    const index = notes.findIndex(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const findNoteSecondWay = function(notes, noteTitle) {  //Uses array.find() method
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

let note = findNoteOneWay(notes, 'note 3')
console.log(note)

note = findNoteSecondWay(notes, 'note 3')
console.log(note)

//******************** Filter in array ********************//
console.log('//******************** Filter in array ********************//')

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'body'))

//******************** Sorting in array ********************//
console.log('//******************** Sorting in array ********************//')

const sortnotes = function(notes) {
    notes.sort(function(a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        else if(b.title.toLowerCase < a.title.toLowerCase()) {
            return 1;
        }
        else {
            return 0;
        }
    })
}
sortnotes(notes)
console.log(notes)