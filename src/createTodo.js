let todoArray = []
class createTodo {
    constructor(title, dueDate, section) {
        this.title = title
        this.dueDate = dueDate
        this.section = section

        todoArray.push(this)
    }
    display(mainCont) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        newDiv.textContent = this.title

        let dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = this.dueDate;

        newDiv.appendChild(dueDateDiv);

        mainCont.appendChild(newDiv);
    }
}
new createTodo('Math homework', '2024-04-22', 'school')
new createTodo('English project', '2024-04-22', 'school')
new createTodo('Physics exam', '2024-04-22', 'school')
new createTodo('Public speech', '2024-04-22', 'school')

export { createTodo, todoArray };
