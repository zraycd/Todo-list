import { todoArray } from "./createTodo"
import clearMain from "./clearMain"

let current = 'school'

function navigate() {
    document.querySelector('.sidebar').addEventListener('click', (event) => {
        clearMain(document.querySelector('.main'));
        current = event.target.textContent
        todoArray.forEach(todo => {
            if (todo.section === event.target.textContent) {
                todo.display(document.querySelector('.main'));
            }
        });
    });
}


export default navigate
export { current }