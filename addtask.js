setURL('http://marina-schwab.developerakademie.com/smallest_backend_ever'); // Connection to the server

let mytasks = [];
/**
 * name value of input fields
 */
let title = document.getElementById('title');
let date = document.getElementById('date');
let category = document.getElementById('category');
let urgency = document.getElementById('urgency');
let description = document.getElementById('description');
let author = document.getElementById('user');
let plususer = document.getElementById('plususer'); 

/**
 * Creating the tasks to push to Board and Backlog
 */
async function createTask(){ // Waiting for server response
    await pushBoard(); // await = very important, otherwise just the second function will be implemented 
    
    await pushBacklog();
}

/**
 * Push the task to "To Do" Area of the board
 */
async function pushBoard() {
    // 1. JSON erstellen; 2. JSON lokal speichen (array.push(...)); 3. Auf dem Server speichern; 4. HTML anzeigen (mit for-Schleife)
    let newTask = {
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'author': author.value
    };

    mytasks.push(newTask);
    await backend.setItem(myTasks, JSON.stringify(newTask));


        for (let i = 0; i < mytasks.length; i++) {
            const toDoarea = mytasks[i];

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
                <div class="arrows-pin">
                    <img src="img/arrow.svg" class="arrow-pin-left">
                    <img src="img/arrow.svg" class="arrow-pin-right" onclick="pushRight()">
                </div>
            </div>
            </div>
            `
        }
}
/*
/**
 * Push the task to Backlog
/ *
async function pushBacklog() {
    let newTask = document.getElementById('push-to-backlog').innerHTML += `

    <div class="img-backlog"> ${plususer} </div>
    <div class="name-backlog"> ${author} <br> </div>
    <div class="category-backlog"> ${category} </div>
    <div class="details-backlog">
        <p class="details-text"> ${details}</p>
        <p class="d-none-text" onclick="showDetails()"> Click here for more details!</p> </div>
    `;

    //mytasks.push(newTask);
    //backend.setItem(myTasks, JSON.stringify(newTask));
} 

async function init() {
    await downloadFromServer(); // 1. Function downloadFromServer() -> mini_backend.js / 2. Waiting for server response in order to let the function continue
    mytasks = JSON.parse(backend.getItem('mytask')) || []; 
}

function deleteTask(newTask) {
    backend.deleteItem(myTasks);
  }*/