


// console.log(document);


const base = {
    employee: 'Михаил',
    todo: [
        {
            id: 'td1',
            author: 'Владимир',
            post: 'Приготовить зимнюю резину',
            ready: false,
        },
        {
            id: 'td2',
            author: 'Семен',
            post: 'Поменять резину на ВАЗ2108',
            ready: true,
        },
    ],
    checkId(id) {
        console.log(id);
    },
    addTodo(author, post) {
        const todo = {
            td: 'td' + (base.todo.length + 1),
            author,
            post,
            ready: false,
        }
        base.todo.push(todo);
        return todo;
    },

}

const todoBtn = document.querySelector('.todo__btn');
const todoForm = document.querySelector('#form-todo');
const todoList = document.querySelector('.todo__list');

// console.log(todoForm);


function addTodo(event) {
    event.preventDefault();

    const authorText = author.value;
    const postText = post.value;
    const objTodo = base.addTodo(authorText, postText);
    // console.log('objTodo: ', objTodo);
    const todoLi = createTodo(objTodo);
    todoList.append(todoLi);
    todoForm.reset();

}

const renderTodo = function () {
    for (let i = 0; i < base.todo.length; i++) {
        const todoLi = createTodo(base.todo[i]);
        todoList.append(todoLi);
    }
}

function createTodo(objTodo) {
    const todoItem =
        `<article class="post">
                  <h3 class="post__author">${objTodo.author}</h3>
                  <p class="post__todo">${objTodo.post}</p>
                  <button class="post__ready" type="button">✔</button>
                </article>`
        ;

    const li = document.createElement('li');
    li.classList.add('todo__list-item');
    li.innerHTML = todoItem;

    return li;
}

renderTodo();

todoForm.addEventListener('submit', addTodo);
