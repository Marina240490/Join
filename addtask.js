/**
 * Overall function in order to push to board and to backlog;
 */

async function createTask(){ // Waiting for server response

     /**
  * definition of value of inputfields 
  */
      let title = document.getElementById('title');
      let date = document.getElementById('date');
      let category = document.getElementById('category');
      let urgency = document.getElementById('urgency');
      let author = document.getElementById('user-pic');
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
 * definition of value of inputfields 
 */
     let title = document.getElementById('title');
     let date = document.getElementById('date');
     let category = document.getElementById('category');
     let urgency = document.getElementById('urgency');
     let author = document.getElementById('user');
     let description = document.getElementById('description');
     let plususer = document.getElementById('plususer');

     
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
 * Loading the currently logged in user.
 */
function loadCurrentUser() {
    let currentUserAsString = localStorage.getItem("currentUser");

    if (currentUserAsString) {
        currentUser = JSON.parse(currentUserAsString);
    };
}

/**
 * Load User Pic in Add Task Form
 */

 //function checkCurrentUser() {
 //   if (localStorage.getItem('currentUser')) { // Check if user exists
 //       let currentUser = JSON.parse(localStorage.getItem('currentUser'));
 //       document.getElementById('apfel').src = currentUser.image;
 //   }
//}


/**
 * Open Overlay
 */
function openOverlay() {
    document.getElementsByClassName('modal-container')[0].classList.remove('hidden');
    document.getElementById('inhalt').classList.remove('hidden');
    document.getElementById('textaddtask').innerHTML = 'Task wurde in Board und Backlog geladen';
}

/**
 * Close Overlay
 */
function closeOverlay() {
    document.getElementsByClassName('modal-container')[0].classList.add('hidden');
}

/**
 * required and Overlay work together 
 */
function createTaskSubmit(event){
    event.preventDefault();
    console.log(event);

    createTask().then( () =>{
        openOverlay();
    })
    .catch( error =>{
        //handle create task error
        console.error(new Error(error));
    });
    return false;
}


/**
 * Open Overlay Add Person in Assigned to 
 */
 function openaddPerson() {
    document.getElementById('addPersonOverlay').classList.remove('hidden');
}

/**
 * Close Overlay Add Person in Assigned to 
 */
 function closeaddPerson() {
    document.getElementById('addPersonOverlay').classList.add('hidden');
}

/**
 * Picked User in Assigned to 
 */
function addPerson(i) {
    localStorage.setItem('currentUser', JSON.stringify(users[i]));

    closeaddPerson();
}

async function showAddedPerson(i){
    await localStorage.getItem('currentUser', JSON.parse(users[i]));

    document.getElementById('assignedTo').innerHTML = `                                
    <img id="apfel" class="user-pic-add-task" src="img/user-pic.jpg">
    <img class="user-pic" src="${users['author']}">
    <img id="plususer" class="add" src="./img/icon plus.png" onclick="openaddPerson()">`;
}