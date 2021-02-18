let mytasks = [];

/**
 * name value of input fields
 */
function addtask() {
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let category = document.getElementById('category').value;
    let urgency = document.getElementById('urgency').value;
    let description = document.getElementById('description').value;
    let user = document.getElementById('user').value;
    let plususer = document.getElementById('plususer').value; 
}

/**
 * delete text from all input fields
 */
function cancelTask() {
    document.getElementById('title').value = '';
    document.getElementById('date').value = '';
    document.getElementById('category').value = '';
    document.getElementById('urgency').value = '';
    document.getElementById('description').value = '';
    document.getElementById('user').value = '';
    document.getElementById('plususer').value = '';
}

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
}

/**
 * Push the task to Backlog
 */
function pushBacklog() {
    let newTask = document.getElementById('????').innerHTML += `
    <div class="pin">
        ${title}<br>
        ${date}<br>
        ${category}<br>
        ${urgency}<br>
        ${user}
    </div>`;
}