// Get todos from local storage
const getSavedTodos = function() {
    const todosJSON= localStorage.getItem('todos')
    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    }
    else {
        return []
    }
}

// Save todo to local storage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Generate DOM for todo
const generateTodoDOM = function(todo) {
    const renderedTodo = document.createElement('p')
    renderedTodo.textContent = todo.text
    return renderedTodo
}

// Generate DOM for todo summary
const generateSummaryDOM = function(incompletedTodos) {
    const todoSummary = document.createElement('h3')
    todoSummary.textContent = `You have ${incompletedTodos.length} todos left`
    return todoSummary
}

// Render todos
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
    const todoSummary = generateSummaryDOM(incompletedTodos)
    document.querySelector('#todos').appendChild(todoSummary)

    filteredTodos.forEach(function(todo) {
        const renderedTodo = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(renderedTodo)
    })
}
