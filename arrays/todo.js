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

const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.isCompleted
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if(!a.isCompleted && b.isCompleted) {
            return -1;
        }
        else if(a.isCompleted && !b.isCompleted) {
            return 1;
        }
        else {
            return 0;
        }
    })
}

console.log(getThingsTodo(todos))

console.log(todos)
deleteTodo(todos, 'todo 3')
console.log(todos)

sortTodos(todos)
console.log(todos)