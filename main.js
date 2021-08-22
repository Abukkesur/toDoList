const inputSearch = document.querySelector('input.search');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
const toDoList = [];
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const inputForm = document.querySelector('input.form');

const removeTask = (e) => {
 e.target.parentNode.remove();
 const index = e.target.parentNode.dataset.key;
 toDoList.splice(index, 1)
 console.log(toDoList);
 taskNumber.textContent = listItems.length;
 renderList();
}


const addTask = (e) => {
 e.preventDefault()
 const titleTask = inputForm.value;
 if (titleTask === "") return;
 const task = document.createElement('li');
 task.className = 'task';
 task.innerHTML = titleTask + "<button>Usuń</button>";
 toDoList.push(task)
 renderList()

 ul.appendChild(task);
 inputForm.value = "";
 // const liItems = document.querySelectorAll('li.task').length;
 taskNumber.textContent = listItems.length;
 task.querySelector('button').addEventListener('click', removeTask);

}

const renderList = () => {
 ul.textContent = "";
 toDoList.forEach((toDoElement, key) => {
  toDoElement.dataset.key = key;
  ul.appendChild(toDoElement);
 })
}
form.addEventListener('submit', addTask)



const searchTask = (e)=>{
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li=> li.textContent.toLocaleLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li=>ul.appendChild(li))

}

inputSearch.addEventListener('input', searchTask);
