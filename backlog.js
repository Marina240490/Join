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

async function initBacklog(){
    await loadAllTasks();
    showBacklog();
}

/**
 * Posting in backlog 
 */

function showBacklog(){
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];

        document.getElementById('push-to-backlog').innerHTML += `
        <div class="assigned-backlog">
        <div class="assigned-person">
       <div class="img-backlog"> ${element['plususer']} </div>
        <div class="name-backlog"> ${element['author']} <br> </div>
        </div> 
        </div>
        <div class="category-backlog"> ${element['category']} </div>
        <div class="details-backlog"> 
            <p class="details-text"> ${element['details']}</p>
            <p class="d-none-text" onclick="showDetails()"> Click here for more details!</p> </div>
        `;
        
    }  
}

