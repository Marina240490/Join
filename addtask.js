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

/**
 * Push the task to "To Do" Area of the board
 */
function pushBoard() {
    let newTask = document.getElementById('to-do-area').innerHTML += `
    <div class="pin">
        ${title}<br>
        ${date}<br>
        ${category}<br>
        ${urgency}<br>
        ${user}
    </div>`;

    mytasks.push(newTask);
}

/**
 * Push the task to Backlog
 */
function pushBacklog() {
    let newTask = document.getElementById('push-to-backlog').innerHTML += `
    <div class="pin">
        ${plususer}<br>
        ${author}<br>
        ${category}<br>
        ${details}<br>
    </div>`;

    {/* <div class="img-backlog"> ${plususer} </div>
    <div class="name-backlog"> ${author} <br> </div>
    <div class="category-backlog"> ${category} </div>
    <div class="details-backlog">
        <p class="details-text"> ${details}</p>
             <p class="d-none-text" onclick="showDetails()"> Click here for more details!</p> */}
}