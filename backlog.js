//let currentUserforBacklog = {};

/**
 * Overlay function for details
 */

/**
 * show the Details
 */

function showDetails() {
    document.getElementById('openDetails').classList.remove('d-none-details');
}

/**
 * close details
 */

function closeDetails() {
    document.getElementById('openDetails').classList.add('d-none-details');
}

/**
 * loading the added tasks from Backend to Backlog
 */

async function initBacklog() {
    await loadAllTasks();
    showBacklog();
}

async function loadAllTasks() {
    await downloadFromServer(); 
    allTasks = jsonFromServer['allTasks'] ? JSON.parse(jsonFromServer['allTasks']) : [];
}


/**
 * Posting in backlog 
 */

 let taskIndex;

 let indexTaskToDelete;

function showBacklog() {
    document.getElementById('push-to-backlog').innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        if(!(element['plususer'] && element['author'])){
            element['plususer'] = 'img/marina.jpg';
            element['author'] = 'img/marina.jpg';
        }
        document.getElementById('push-to-backlog').innerHTML += `
        <div class="backlog-div" id="category${i}"> 
        <div class="assigned-backlog">
            <div class="assigned-person">
                <div class="img-backlog"> 
                <img src="${element['author']}">
                </div>
                <div class="name-backlog"> ${currentUserFromLocalStorage['name']} <br>
                E-Mail: ${currentUserFromLocalStorage['e-mail']}</div>
            </div> 
        </div>
        <div  class="category-backlog"> ${element['category']} </div>
        <div class="details-backlog"> 
            <p class="details-text"> ${element['description']}</p>
        </div>
        <div class="delete-backlog">
            <img src="img/delete_bin.svg" class="delete-pin-bl" onclick="openDeleteWindowBacklog(${i})"> 
        </div>
        </div>
        `;
        
        coloredBacklogdiv(element['category'], i); 
    }
}

async function aproveDeletionBacklog(){
    await deleteTaskBacklog(indexTaskToDelete);
 }

function openDeleteWindowBacklog(index) {
    indexTaskToDelete = index;
    document.getElementById('deleteWindow').classList.remove('d-none');
    document.getElementById('deleteWindow').classList.add('deleteWindow');
    document.getElementById('main-section').classList.add('d-none');
}

function closeDeleteWindowBacklog() {
    document.getElementById('main-section').classList.remove('d-none');
    document.getElementById('main-section').classList.add('main-section');
    document.getElementById('deleteWindow').classList.add('d-none');
}

async function deleteTaskBacklog(TaskIndex) {
    allTasks.splice(TaskIndex, 1);
    await backend.setItem("allTasks", JSON.stringify(allTasks));
    closeDeleteWindowBacklog();
    showBacklog();
}