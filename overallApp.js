setURL('http://marina-schwab.developerakademie.com/smallest_backend_ever'); // Connection to the server
let allTasks = [];
/**
 * Function for responsive Menu for all pages! (Never delete!!!!!!)
 */
let show = false;

function showMenu() {


    if (show == false) {
      
        document.getElementById('res-menu').classList.add('show-mobilemenu');
      
        show = !show
        
    }
    else {
        document.getElementById('res-menu').classList.remove('show-mobilemenu');
        show = !show
    }
}

async function loadAllTasks() {
    await downloadFromServer(); // 1. Function downloadFromServer() -> mini_backend.js / 2. Waiting for server response in order to let the function continue
    //let allTasksAsString = await backend.getItem('allTasks');
    allTasks = JSON.parse(jsonFromServer['allTasks']);
    console.log(allTasks);
    //allTasks = allTasksAsString?  JSON.parse(allTasksAsString) : [];
    //console.log(allTasks);
    //await pushBoard();
}