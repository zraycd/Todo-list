import { createTodo, todoArray } from "./createTodo"
function addButtonFunctionality() {
    const addBtn = document.querySelector('#addBtn')
    const form = document.querySelector('form')

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none'
        form.style.display = 'flex'
    })
    document.querySelector('#submit').addEventListener('click', () => {
        form.style.display = 'none'
        addBtn.style.display = 'block'
        let newTodo = new createTodo(document.querySelector('#title').value, document.querySelector('#dueDate').value, document.querySelector('#section').value.toLowerCase())
        todoArray.push(newTodo)
        console.log(todoArray)
    })
}

export default addButtonFunctionality