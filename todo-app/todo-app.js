const todos = getSavedTodos()

const filters = {
    filterText: '',
    isHideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.filterText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todo.value,
        isCompleted: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todo.value = ''
})

document.querySelector('#hide-completed-todo').addEventListener('change', function(e) {
    filters.isHideCompleted = e.target.checked
    renderTodos(todos, filters)
})
