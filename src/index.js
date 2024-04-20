import './style.css'
import addButtonFunctionality from "./addBtn";
import navigate from './mainContDisplay';

addButtonFunctionality()
navigate()
document.querySelector('.main').addEventListener('click', (event) => {
    let classes = event.target.classList
    if (classes.value === 'todo') {
        classes.remove('todo')
        classes.add('done')
    } else if (classes.value === 'done'){
        classes.remove('done')
        classes.add('todo')
    }
})