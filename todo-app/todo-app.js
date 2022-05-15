const todos = [{
    text: 'Todo 1',
    isCompleted: false
}, {
    text: 'Todo 2',
    isCompleted: true
}, {
    text: 'Todo 3',
    isCompleted: false
}, {
    text: 'Todo 4',
    isCompleted: false
}, {
    text: 'Todo 5',
    isCompleted: true
}]

const filters = {
    filterText: '',
    isHideCompleted: false
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const filterTextMatch = todo.text.toLowerCase().includes(filters.filterText.toLowerCase())
        const isHideCompletedMatch = !filters.isHideCompleted || !todo.isCompleted
        return filterTextMatch && isHideCompletedMatch
    })
    
    document.querySelector('#todos').innerHTML = ''

    const incompletedTodos = filteredTodos.filter(function(todo) {
        return !todo.isCompleted
    })
    const numTodosLeft = document.createElement('h3')
    numTodosLeft.textContent = `You have ${incompletedTodos.length} todos left`
    document.querySelector('#todos').appendChild(numTodosLeft)

    filteredTodos.forEach(function(todo) {
        const renderedTodo = document.createElement('p')
        renderedTodo.textContent = todo.text
        document.querySelector('#todos').appendChild(renderedTodo)
    })
}

const addNewTodo = function(newTodo) {
    todos.push({
        text: newTodo,
        isCompleted: false
    })
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.filterText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    addNewTodo(e.target.elements.todo.value)
    renderTodos(todos, filters)
    e.target.elements.todo.value = ''
})

document.querySelector('#hide-completed-todo').addEventListener('change', function(e) {
    filters.isHideCompleted = e.target.checked
    renderTodos(todos, filters)
})