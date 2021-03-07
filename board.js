/**
 * Loading Tasks from AddTask out of the Backend to show it then with showBoard()
 */
async function initBoard(){
    await loadAllTasks();
    showBoard();
}

/**
 * Posting pin at board
 */
function showBoard(){
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];

        document.getElementById('to-do-area').innerHTML += ` <div class="pin" id="dragelement[i]" ondragstart="dragStart(event)">
            <div class="first-row-pin">
                <p class="p-header">${element['title']}</p>
                <img src="img/X.svg" class="X-pin" onclick="deleteTask(dragelement)">
            </div>
            
            <div class="second-row-pin">
                <p class="p-pin">${element['date']}</p>
                <p class="p-pin">${element['urgency']}</p>
                <div class="picrow-pin">
                    <img src="${element['author']}" class="user-pic-pin">
                    <p class="p-category" id="category">${element['category']}</p>
                </div>
            </div>
            <div class="pin-color" id="pin-color"></div>
        </div> 
        `
    }  
}

/**
 * deleting task
 */
function deleteTask(dragelement) {
    allTasks = allTasks.splice(dragelement);
    backend.setItem("allTasks", JSON.stringify(allTasks));
    showBoard();
}



/**
 * Open current User Window
 */
 function loadCurrentUserWindow() {
    document.getElementById("user-pic").src="${user['image']}";
}

/*
function openDeleteWindow(taskId) {
    document.getElementById("delete-container-overlay").classList.remove("d-none");
    document.getElementById("delete-container").classList.remove("d-none");
    document.getElementById("delete-container").innerHTML = `
    <div class="delete-window">
        <span>Möchtest du diesen Pin wirklich löschen?</span>
            <div class="button-order">
                <button onclick="deleteTask(${taskId})" class="btn btn-primary">Yes</button>
                <button onclick="closeDeleteWindow()" class="btn btn-primary">No</button>
            </div>
    </div>`;
}

function closeDeleteWindow() {
    document.getElementById("delete-container-overlay").classList.add("d-none");

    document.getElementById("delete-container").classList.add("d-none");
}*/

/**
 * Drag and Drop Function
 */
let id;

function dropPin(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    id=ev.target.id;
}

function drop(ev) {
    ev.target.append(document.getElementById(id));
}

/**
 * Loading the data of all signed up users from the local storage and saves them in the users array when the page is loaded.
 *
 */
 async function loadAllUsers() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

/**
 * Loading the currently logged in user.
 */
function loadCurrentUser() {
    let currentUserAsString = localStorage.getItem("currentUser");

    if (currentUserAsString) {
        currentUser = JSON.parse(currentUserAsString);
    }
}