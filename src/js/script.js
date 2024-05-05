//função que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task_title").value;

    if(taskTitle){

        // clonar o template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adicionar titulo
        newTask.querySelector(".task_title").textContent = taskTitle;

        // remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
       const list = document.querySelector("#task_list");
       list.appendChild(newTask);

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove_btn").addEventListener("click", function(){
            removeTask(this);
        })
        // adicionar evento de complete
        const doneBtn = newTask.querySelector(".done_btn").addEventListener("click", function(){
            completeTask(this);
        })

        // limpar texto
        document.querySelector("#task_title").value = ""
    }

}

// função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}
// função de completar a tarefa
function completeTask(task){
    
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");

}

const addBtn = document.querySelector("#add_btn");

// evento de adicionar tarefa
addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();

});