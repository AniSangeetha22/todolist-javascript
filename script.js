var inputEl = document.getElementById("mytasks");
const addEl = document.getElementById("taskAdd");
const  todolistEl =document.getElementById("todolist");
const taskslistEl = document.getElementById("taskslist")


let todos = [];

window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>todolist(todo))
}

addEl.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(inputEl.value);
    todos.push(inputEl.value);
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos);
    todolist(inputEl.value);
    // editlistvalue(inputEl.value);
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

        // editlistvalue(inputEl.value);
        

        task_edit_el.addEventListener('click', (e) => {
                      
            addEl.value ="Save"
            inputEl.value = spanEl.innerText;

            if (addEl.value === "Save") {
                addEl.addEventListener('click', (e)=> {
                    addEl.value ="Add";
                    remove(spanEl.innerText);
                    // const parent = spanEl.parentElement;
                    // parent.removeChild(parent);
                    // console.log(parent);
                    const child = listEl.firstChild;
                     console.log(child);
                    //  listEl.removeChild(child);
                    todolistEl.removeChild(listEl);
                    // remove(spanEl.innerText);
                    console.log(spanEl.innerText);
                    // let index = todos.indexOf(todo)
                    // if (index > -1) {
                    //     todos.splice(index, 1);
                    //   }
                    spanEl.innerText = inputEl.value;
                    // listEl.removeChild(spanEl);
                    // listEl.appendChild(spanEl);
                    // todolistEl.appendChild(listEl);
                  
                    // spanEl.innerText = inputEl.value;
                  
                    // console.log("-----------------------");
                    // console.log( inputEl.value);
                    // e.target.value = inputEl.value;
                    // console.log(taskslistEl.parentElement);
                    // spanEl.innerText =  inputEl.value;
                    
                })
                
            } 


        //     console.log(spanEl.innerText)
        //     console.log( inputEl.value);
        //     console.log("******************");
        //     // console.log(spanEl.parentNode.parentNode);
        //    // console.log(spanEl.parentNode.parentNode.innerText);
        //     console.log(taskslistEl.parentElement);
           })

           task_delete_el.addEventListener('click', (e) => {
			todolistEl.removeChild(listEl);
            remove(spanEl.innerText)
            console.log(todos)
		});
}

function remove(todo){
    let index = todos.indexOf(todo)
    console.log("-------------Index-----------");
    console.log(index);
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}