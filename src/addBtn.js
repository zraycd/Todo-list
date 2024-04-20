import { createTodo } from "./createTodo"
import {current} from "./mainContDisplay"
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
        let newTodo = new createTodo(document.querySelector('#title').value, document.querySelector('#dueDate').value, document.querySelector('#section').value)
        if (current === newTodo.section) {
            newTodo.display(document.querySelector('.main'))
        }
    })
}

export default addButtonFunctionality