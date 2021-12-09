const base = {
    employee: 'Михаил',
    todo: getTodoLS(),
    //     [ { id: 'td1',
    //         author: 'Владимир',
    //         post: 'Приготовить зимнюю резину',
    //         ready: false, },
    //     { id: 'td2',
    //         author: 'Семен',
    //         post: 'Поменять резину на ВАЗ2108',
    //         ready: true, }, ],
    checkId(id) {
        for (i = 0; i < base.todo.length; i++) {
            if (base.todo[i].id === id) {
                base.todo[i].ready = true;
            }
        }
    },
    addTodo(author, post) {
        const todo = {
            id: 'td' + (Date.now()),
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

function addTodo(event) {
    event.preventDefault();
    const authorText = author.value;
    const postText = post.value;
    const objTodo = base.addTodo(authorText, postText);
    const todoLi = createTodo(objTodo);
    todoList.append(todoLi);
    todoForm.reset();
    setTodoLS();
}

const renderTodo = function () {
    for (let i = 0; i < base.todo.length; i++) {
        const todoLi = createTodo(base.todo[i]);
        todoList.append(todoLi);
    }
}

function createTodo(objTodo) {
    const todoItem =
        `<article class="post ${objTodo.ready ? 'post_complete' : ''}">
                  <h3 class="post__author">${objTodo.author}</h3>
                  <p class="post__todo">${objTodo.post}</p>
                  ${!objTodo.ready ? `<button class="post__ready" data-id="${objTodo.id}" type="button">✔</button>` : ''}
          </article>`
        ;
    const li = document.createElement('li');
    li.classList.add('todo__list-item');
    li.innerHTML = todoItem;
    return li;
}


function getTodoLS() {
    if (localStorage.getItem('todo')) {
        return JSON.parse(localStorage.getItem('todo'));
    }
    return [];
}

function setTodoLS() {
    localStorage.setItem('todo', JSON.stringify(base.todo));
}

renderTodo();

function checkTodo(event) {
    const btn = event.target.closest('.post__ready');
    if (btn) {
        let post = btn.closest('.post');
        post.classList.add('post_complete');
        const id = btn.dataset.id;
        console.log(id);
        base.checkId(id);
        setTodoLS();
        btn.remove();
    }
}

todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', checkTodo);


