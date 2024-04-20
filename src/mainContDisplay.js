import { todoArray } from "./createTodo"
import clearMain from "./clearMain"

function navigate() {
    document.querySelector('.sidebar').addEventListener('click', (event) => {
        clearMain(document.querySelector('.main'))
        todoArray.forEach(obj => {
            if (obj.section === event.target.textContent) {
                obj.display(document.querySelector('.main'))
                console.log(obj)
            }
        })
    })
}

export default navigate