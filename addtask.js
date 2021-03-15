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

 function checkCurrentUser() {
    if (localStorage.getItem('currentUser')) { // Check if user exists
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        document.getElementById('apfel').src = currentUser.image;
    }
}


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
 * Show all Users in Assigned to 
 */
async function displayUsers() {
    await loadAllUsers();
    checkCurrentUser();
    let loggedInUser = users.find((e) => e.username == currentUser[0].username);
    selectedUsers.push(loggedInUser);
    getUserPicker();
    displaySelectedUsers();
    blendCurrentUser();
}

/**
 * This function is used to generate all users in the user picker.
 */
 function getUserPicker() {
    document.getElementById("user-picker-container").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        document.getElementById("user-picker-container").innerHTML += `
        <div id="user-picker-row${i}" class ="user-picker-row" onclick="selectUser(${i})"> 
        <img src="${users[i]["profilePicture"]}"> 
        <span>${users[i]["username"]} </span> 
        </div>`;
    }
}

/**
 * This function is used to highlight the current user in the user picker.
 */
 function blendCurrentUser() {
    for (let j = 0; j < users.length; j++) {
        if (users[j]["username"] == selectedUsers[0]["username"]) {
            document
                .getElementById("user-picker-row" + j)
                .classList.add("user-picker-row-select");
        }
    }
}

/**
 * This function is used to select an user
 *
 *
 * @param {integer} i - defines the row number
 */
function selectUser(i) {
    let id = "user-picker-row" + i;
    checkIfUserIsAlreadySelected(i, id);
    displaySelectedUsers();
}

/**
 *
 * This function is used to check if an User is Selected in the user picker.
 *
 * @param {integer} i - defines the postion of the array persons
 * @param {string} id  - defines the row of the selected user
 *
 */
function checkIfUserIsAlreadySelected(i, id) {
    let userfound = false;
    for (let j = 0; j < selectedUsers.length; j++) {
        if (selectedUsers[j] == users[i]) {
            userfound = true;
            document.getElementById(id).classList.remove("user-picker-row-select");
            selectedUsers.splice(j, 1);
        }
    }
    if (!userfound) {
        document.getElementById(id).classList.add("user-picker-row-select");
        selectedUsers.push(users[i]);
    }
}

/**
 * This function is used to display the selected users in the add tasks section.
 */
 function displaySelectedUsers() {
    document.getElementById("assign-person").innerHTML = "";
    for (let j = 0; j < selectedUsers.length; j++) {
        document.getElementById("assign-person").innerHTML += `
        <img id="user" src="${selectedUsers[j]["profilePicture"]}">`;
    }
}

/**
 * This function is used to remove all Selected Persons
 *
 */
function removePerson() {
    selectedUsers = [];

    for (let i = 0; i < users.length; i++) {
        let id = "user-picker-row" + i;
        document.getElementById(id).classList.remove("user-picker-row-select");
    }

    displayUsers();
}
