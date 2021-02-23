setURL('http://marina-schwab.developerakademie.com/smallest_backend_ever-master');

let mytasks = [];
/**
 * name value of input fields
 */
let title = document.getElementById('title').value;
let date = document.getElementById('date').value;
let category = document.getElementById('category').value;
let urgency = document.getElementById('urgency').value;
let description = document.getElementById('description').value;
let author = document.getElementById('user').value;
let plususer = document.getElementById('plususer').value; 



async function createTask(){
    await pushBoard(); 
    
    await pushBacklog()
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
        'plususer': plususer.value
    };

    // let newTask = document.getElementById('to-do-area').innerHTML += `
    // <div class="pin">
    //     ${title}<br>
    //     ${date}<br>
    //     ${category}<br>
    //     ${urgency}<br>
    //     ${author}
    // </div>`;

    mytasks.push(newTask);
    await backend.setItem(myTasks, JSON.stringify(newTask));

    //window.location.href = 'board.html'; //Weiterleitung auf die gewünschte Seite (mittels Link)
}

/**
 * Push the task to Backlog
 */
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

async function init() {
    await downloadFromServer();
    newTask = JSON.parse(backend.getItem(myTasks)) || [];
}

function deleteTask(newTask) {
    backend.deleteItem(myTasks);
  }