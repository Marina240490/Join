/**
 * Overall function in order to push to board and to backlog; WORK BITCH
 */
 async function createTask(){ // Waiting for server response

/**
 * definition of value of inputfields 
 */
     let title = document.getElementById('title');
     let date = document.getElementById('date');
     let category = document.getElementById('category');
     let urgency = document.getElementById('urgency');
     let author = document.getElementById('user');
     let description = document.getElementById('description');
     let plususer = document.getElementById('plususer');
     

    /**
    * JSON for inputfields
    */
     let newTask =
     {
     'title': title.value,
     'date': date.value,
     'category': category.value,
     'urgency': urgency.value,
     'author': author.src,
     'description': description.value,
     'plususer' : plususer.src
     };
   await saveTask(newTask); // await = very important, otherwise just the second function will be implemented 
   
   //await pushBacklog();
}

/**
* push tasks to backend for board WORK ALSO BITCH
*/
async function saveTask(task) {
   allTasks.push(task);
   //console.log(allTasks);
   let allTasksAsString = JSON.stringify(allTasks);
   await backend.setItem('allTasks', allTasksAsString);
}

/**
* loading all tasks from backend to the destination you want
*/
async function initAddTasks(){
   await loadAllTasks();
}


/**
* push tasks to backend for backlog
*/

// async function pushBacklog() {
 
//     allTasks.push(newTask);
//     console.log(allTasks);

//     let allTasksAsString = JSON.stringify(allTasks);
//     await backend.setItem('allTasks', allTasksAsString);
// }

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

/**
* Open Overlay
*/
function openOverlay() {
   document.getElementsByClassName('modal-container')[0].classList.remove('hidden');
   document.getElementById('inhalt').classList.remove('hidden');
   document.getElementById('textaddtask').innerHTML = 'Task wurde in Board geladen ';
}

/**
* Close Overlay
*/
function closeOverlay() {
   document.getElementsByClassName('modal-container')[0].classList.add('hidden');
}