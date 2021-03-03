
/*async function createTask(){ // Waiting for server response
   await pushBoard(); // await = very important, otherwise just the second function will be implemented 
    
    /*await pushBacklog();*/


async function pushBoard() {
    // 1. JSON erstellen; 2. JSON lokal speichen (array.push(...)); 3. Auf dem Server speichern; 4. HTML anzeigen (mit for-Schleife)
    
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let category = document.getElementById('category');
    let urgency = document.getElementById('urgency');
    let author = document.getElementById('user');
    
    let newTask =
        {
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'author': author.value
        };

    allTasks.push(newTask);
    console.log(allTasks);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}

async function initAddTasks(){
    await loadAllTasks();
}





/*
async function pushBacklog() {
    let newTask = document.getElementById('push-to-backlog').innerHTML += `

    <div class="img-backlog"> ${plususer} </div>
    <div class="name-backlog"> ${author} <br> </div>
    <div class="category-backlog"> ${category} </div>
    <div class="details-backlog">
        <p class="details-text"> ${details}</p>
        <p class="d-none-text" onclick="showDetails()"> Click here for more details!</p> </div>
    `;

    mytasks.push(newTask);
    backend.setItem(myTasks, JSON.stringify(newTask));
}

function deleteTask(newTask) {
    backend.deleteItem(myTasks);
}}*/