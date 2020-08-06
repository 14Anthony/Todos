const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const time = document.querySelector('#dates')

// if (localStorage.getItem(todo)){

// }

const generateTemplate = (todo) => {
    const html = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
                </li>
                `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();
    localStorage.setItem('todo', todo)
    // console.log(todo);
    if (todo.length) {

        generateTemplate(todo);
        addForm.reset();
    }

});

//delete the to do list

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
// ____________________________________________________________________________________________________________
const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        // console.log(todo.textContent);
        // return true;

        .forEach((todo) => todo.classList.add('filtered'));


    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        // console.log(todo.textContent);
        // return true;

        .forEach((todo) => todo.classList.remove('filtered'));

};


search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});