const h1=document.querySelector('h1');
const todo=document.querySelector('#todo');
const taskContainer=document.querySelector('#tasks');

todo.addEventListener('submit',function(e){
    e.preventDefault();
    const taskValue=todo.elements.newtask;
    
    addTask(taskValue.value);
    taskValue.value='';
})

const addTask =(taskValue) =>{ 
    if(taskValue.length>0)
    { 
    const TaskList=document.createElement('li');
  
    TaskList.classList.add('listoftasks');
    TaskList.append(`${taskValue}`);
    TaskList.innerHTML+=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='deleteTask'><i class="material-icons">delete</i></button>`
    taskContainer.append(TaskList);
    }
    else{
        alert("Enter A Task!");
    }

    var current_tasks = document.querySelectorAll("#deleteTask");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
