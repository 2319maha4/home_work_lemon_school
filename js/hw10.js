let clearBtn = document.getElementById('clear-btn');
let addBtn = document.getElementById('add-btn');
let addInput = document.getElementById('app__item-input');
let todoList = document.getElementById('app__todo-list');
let listArray = [];

function taskObj(content, status) {
    this.content = '';
    this.status = 'incomplete';
}

let changeStatusToComplete = function(){
    let parent = this.parentElement;
    parent.className = 'uncompleted well';
    this.innerText = 'Incomplete';
    this.removeEventListener('click',changeStatusToComplete);
    this.addEventListener('click',changeStatusToIncomplete);
    changeListArray(parent.firstChild.innerText,'complete');
}

let changeStatusToIncomplete = function(){
    let parent = this.parentElement;
    parent.className = 'completed well';
    this.innerText = 'Complete';
    this.removeEventListener('click',changeStatusToIncomplete);
    this.addEventListener('click',changeStatusToComplete);
    changeListArray(parent.firstChild.innerText,'incomplete');
}

let removeItem = function(){
    let parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);
    let data = this.parentElement.firstChild.innerText;
    for(let i=0; i < listArray.length; i++){
        if(listArray[i].content == data){
            listArray.splice(i,1);
            refreshLocal();
            break;
        }
    }
}

let changeListArray = function(data,status){
    for(let i=0; i < listArray.length; i++){
        if(listArray[i].content == data){
            listArray[i].status = status;
            refreshLocal();
            break;
        }
    }
}

let createItemDom = function(text,status){
    let listItem = document.createElement('li');
    let itemLabel = document.createElement('label');
    let itemCompBtn = document.createElement('button');
    let itemIncompBtn = document.createElement('button');
    listItem.className = (status == 'incomplete')?'completed well':'uncompleted well';
    itemLabel.innerText = text;
    itemCompBtn.className = 'btn btn-success';
    itemCompBtn.innerText = (status == 'incomplete')?'Complete':'Incomplete';
    if(status == 'incomplete'){
        itemCompBtn.addEventListener('click',changeStatusToComplete);
    }else{
        itemCompBtn.addEventListener('click',changeStatusToIncomplete);
    }

    itemIncompBtn.className = 'btn btn-danger';
    itemIncompBtn.innerText = 'Delete';
    itemIncompBtn.addEventListener('click',removeItem);
    listItem.appendChild(itemLabel);
    listItem.appendChild(itemCompBtn);
    listItem.appendChild(itemIncompBtn);
    return listItem;
}

let refreshLocal = function(){
    let todos = listArray;
    localStorage.removeItem('todoList');
    localStorage.setItem('todoList', JSON.stringify(todos));
}

let addToList = function(){
    let newItem = new taskObj();
    newItem.content = addInput.value;
    listArray.push(newItem);

    refreshLocal();
    let item = createItemDom(addInput.value,'incomplete');
    todoList.appendChild(item);
    addInput.value = '';
}

let clearList = function(){
    listArray = [];
    localStorage.removeItem('todoList');
    todoList.innerHTML = '';
}

window.onload = function(){
    let list = localStorage.getItem('todoList');
    if (list != null) {
        todos = JSON.parse(list);
        listArray = todos;
        for(let i=0; i<listArray.length;i++){
            let data = listArray[i].content;
            let item = createItemDom(data,listArray[i].status);
            todoList.appendChild(item);
        }
    }
};
addBtn.addEventListener('click',addToList);
clearBtn.addEventListener('click',clearList);