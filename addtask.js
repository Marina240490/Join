setURL('http://marina-schwab.developerakademie.com/smallest_backend_ever'); // Connection to the server

let allTasks = [];
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

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}


async function loadAllTasks() {
    await downloadFromServer(); // 1. Function downloadFromServer() -> mini_backend.js / 2. Waiting for server response in order to let the function continue
    let allTasksAsString = await backend.getItem('allTasks') || []; 
    allTasks = JSON.parse(allTasksAsString);
}

/*
 { for (let i = 0; i < alltasks.length; i++) {
            const newTask = alltasks[i];

            document.getElementById('to-do-area').innerHTML += ` <div class="pin" id="pin">
            <div class="first-row-pin">
                <p class="p-header">${newTask[title]}</p>
                <img src="img/X.svg" class="X-pin" onclick="deletePin()">
            </div>
            
            <div class="second-row-pin">
                <p class="p-pin">${newTask[date]}</p>
                <p class="p-pin">${newTask[category]}</p>
                <p class="p-pin">${newTask[urgency]}</p>
                <img src=src="${newTask['author']}"  class="user-pic-pin">
                <img src="img/arrows.svg" class="arrow-pin">
            </div>
            </div>
            `
        }
}

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