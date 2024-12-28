const form = document.querySelector("#todo-form")
const taskTitleInput = document.querySelector("#task-title-input")
const todoListUl = document.querySelector("#todo-list")

let tasks = []

form.addEventListener('submit', (event)=>{
    event.preventDefault()//evita o carregamento padrão de recarregar a página 

    const taskTitle = taskTitleInput.value

    if(taskTitle.length < 3 ){
        alert("Sua tarefa precisa ter pelo menos 3 caracteres")
        return;
    }
    //Adicionando a nova tarefa no array de tasks
    tasks.push(taskTitle)

    //adicionando a nova tarefa no HTML

    const li = document.createElement('li')
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')

    todoListUl.appendChild(li)

    taskTitleInput.value = '' //para limpar o input 
} )

