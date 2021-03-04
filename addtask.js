
 /**
  * definition of value of inputfields 
  */


    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let category = document.getElementById('category');
    let urgency = document.getElementById('urgency');
    let author = document.getElementById('user');
    let description = document.getElementById('description');
    

    /**
     * JSON for inputfields
     */

    let newTask =
        {
        'title': title,
        'date': date,
        'category': category,
        'urgency': urgency,
        'author': author,
        'description': description
        };

/**
 * Overall function in order to push to board and to backlog; WORK BITCH
 */

async function createTask(){ // Waiting for server response
    await pushBoard(); // await = very important, otherwise just the second function will be implemented 
    
    await pushBacklog();
}

/**
 * push tasks to backend for board WORK ALSO BITCH
 */

async function pushBoard() {
    
    allTasks.push(newTask);
    console.log(allTasks);

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

async function pushBacklog() {
  
    allTasks.push(newTask);
    console.log(allTasks);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}
