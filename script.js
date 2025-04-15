const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-add__title-input');
const todoDescription = document.getElementById('todo-add__desc-input');
const todoListUL = document.getElementById('todo-list');

let todoID = 0;

todoForm.addEventListener('submit',  (e) => {
    e.preventDefault();
    addTodo();
});

addTodo = () => {
    const todoTitleText = todoInput.value.trim();
    const todoDescText = todoDescription.value.trim();

    if (todoTitleText.length > 0) {
        const todoLI = document.createElement('li');
        todoLI.className = 'todo-list__item'
        todoLI.id = `todo-item${todoID}`

        todoLI.innerHTML = `
            <div class="title">
                <input class="item__checkbox checkbox" type="checkbox" id="checkbox-${todoID}">
                <label class="custom-checkbox" for="checkbox-${todoID}">
                    <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                    </svg>
                </label>
                <label for="checkbox-${todoID}" class="todo-item__title">
                    ${todoTitleText}
                </label>
                <div class="todo-list__buttons">
                    <button class="item__open-desc-button open-desc-button" id="open-desc-button-${todoID}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-gray)">
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                        </svg>
                    </button>
                    <button class="item__delete-button delete-button" id="delete-button-${todoID}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-gray)">
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="description visually-hidden">
                <label for="open-desc-button" class="todo-item__desc">
                    ${todoDescText}
                </label>
            </div>
        `;

        todoListUL.append(todoLI);

        todoInput.value = '';
        todoDescription.value = '';

        todoID++;

        const deleteButton = todoLI.querySelector('.item__delete-button');
        deleteButton.onclick = () => {
            todoLI.remove();
        }
        const openDesc = todoLI.querySelector('.item__open-desc-button');
        const description = todoLI.querySelector('.description')

        openDesc.onclick = () => {
            description.classList.toggle('visually-hidden');
        }
    }
}


