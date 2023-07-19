var inputEl = document.getElementById("mytasks");
const addEl = document.getElementById("taskAdd");
const  todolistEl =document.getElementById("todolist");
const taskslistEl = document.getElementById("taskslist")


let todos = [];

addEl.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(inputEl.value);
    todos.push(inputEl.value);
    console.log(todos);
    todolist(inputEl.value);
    inputEl.value ="";
})

function todolist(getTodoValue) {
    let listEl = document.createElement('li');
    // let editEl = document.createElement('input')
    let spanEl = document.createElement('span');
    let divBtnEl = document.createElement('div')
    spanEl.innerText = getTodoValue;
    // editEl.style.color ='black'
    // editEl.innerText = getTodoValue;
   

    const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

        

        const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

        listEl.appendChild(spanEl);
        // listEl.appendChild(editEl);
        divBtnEl.appendChild(task_edit_el);
        divBtnEl.appendChild(task_delete_el);
        listEl.appendChild(divBtnEl);


        todolistEl.appendChild(listEl);

        task_edit_el.addEventListener('click', (e) => {
            // spanEl.focus() ;
            // getTodoValue = inputEl.innerText;
            //console.log(e.target);
           
            console.log(getTodoValue);
            addEl.value ="Save"
            
            inputEl.value = spanEl.innerText;
            
            console.log(spanEl.innerText)
            console.log( inputEl.value);
            console.log("******************");
            // console.log(spanEl.parentNode.parentNode);
           // console.log(spanEl.parentNode.parentNode.innerText);
            console.log(taskslistEl.parentElement);
           })

           task_delete_el.addEventListener('click', (e) => {
			todolistEl.removeChild(listEl);
		});
}