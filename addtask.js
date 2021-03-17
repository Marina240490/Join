let choosenUsers = [];

/**
 * Overall function in order to push to board and to backlog;
 */

async function createTask() { // Waiting for server response
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
        'id': new Date().getTime(),
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'author': author.src,
        'description': description.value,
        'plususer': plususer.src,
        'assigne': choosenUsers
    };
    choosenUsers = [];
    await saveTask(newTask); // await = very important, otherwise just the second function will be implemented 
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

    document.getElementById('myForm').reset();
}

/**
* loading all tasks from backend to the destination you want
*/
async function initAddTasks() {
    await loadAllTasks();
    document.getElementById("apfel").src = currentUserFromLocalStorage.image;
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
function createTaskSubmit(event) {
    event.preventDefault();
    console.log(event);

    createTask().then(() => {
        openOverlay();
    })
        .catch(error => {
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
    choosenUsers.push({ name: users[i].name, img: users[i].image });
    closeaddPerson();
    showChoosenUsersList();
}

function showChoosenUsersList(){
    document.getElementById('birne').innerHTML = ''; 
    for(let i = 0; i < choosenUsers.length; i++){
        document.getElementById('birne').innerHTML += `
        <img class="user-pic-add-task" src="${choosenUsers[i]['img']}">`;   
    }
}



//localStorage.removeItem('currentUser');

//function deleteSelectedUser(i){
//    choosenUsers.splice({ name: users[i].name, img: users[i].image });
//
//    initAddTasks();
//}

//id="traube" onclick="deleteSelectedUser(${i})"




/**
 * updateusers: displays those users who are assigned to task.
 
 function updatetaskusers() {

    document.getElementById('usersassignedtotask').innerHTML = '';

    for (i = 0; i < currenttaskusers.length; i++) {
        let currentuserid = currenttaskusers[i];
        console.log(currentuserid);
        let userimage = users[currentuserid].userimage;
        let assignedusername = users[currentuserid].username;
        document.getElementById('usersassignedtotask').innerHTML += `<div class="people-assigned"><img src="./uploads/${userimage}" alt="" onclick="deleteuserfromtask(${i})"></img><div>${assignedusername}</div></div>`;
    }
}

/**
 * assignuser: shows available users to assign task to
 
function assignuser() {

    document.getElementById('addtaskuserlist').classList.remove('d-none');
    document.getElementById('assign-to-plus').classList.add('d-none');
    document.getElementById('addtaskuserlist').classList.add('z-2');
    document.getElementById('addtaskuserlist').innerHTML = `<div class="d-flex availableusersheader"><div><img src="./img/Unbenannt-1.PNG" alt="" style="cursor: pointer; margin-right: 8px" onclick='canceluserlist()'></div><p>AVAILABLE USERS:</p></div>`;
    
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        document.getElementById('addtaskuserlist').innerHTML += `<div class="people" id="assignuserlist${user['userid']}" onclick="selectuserassign(${user['userid']})">
        <img src="./uploads/${user['userimage']}" ><div>${user['username']}</div></div>`;
    }

}

/**
 * selectuserassign: pushes users' id into currenttaskusers array
 * @param {} id: provided by the image that starts this function
 
function selectuserassign(id) {

    if (currenttaskusers.includes(id)) { //checks if user is already assigned
        alert('User is already assigned to task!')
    }
    else {
        document.getElementById('assign-to-plus').classList.remove('d-none');
        document.getElementById('addtaskuserlist').classList.add('d-none');
        let selecteduser = users[id].userid;
        currenttaskusers.push(selecteduser); //pushes userid into currenttaskusers array 
        let PushTaskToUser = users[id].usertasks;
        PushTaskToUser.push(newtaskid); //pushes taskid into user array

        updatetaskusers();
    }
}

/**
 * deleteuser: deletes user from currenttasks and initiates view update; Important: This function does not use userid, instead it uses current position in array
 

function deleteuserfromtask(position) {
    currenttaskusers.splice(position, 1);
    updatetaskusers();

}


/**
 * canceluserlist: hides available users from view
 *
 *
function canceluserlist() {
    document.getElementById('addtaskuserlist').classList.add('d-none');
    document.getElementById('addtaskuserlist').classList.remove('z-2');
    document.getElementById('assign-to-plus').classList.remove('d-none');
}
*/