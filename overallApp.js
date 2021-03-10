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
    allTasks = jsonFromServer['allTasks'] ? JSON.parse(jsonFromServer['allTasks']) : [];
    console.log(allTasks);
    //allTasks = allTasksAsString?  JSON.parse(allTasksAsString) : [];
    //console.log(allTasks);
    //await pushBoard();
}

/**
 * Defining backgroundcolor of Category
 */
 function coloredCategory(category, index) {
    if(category == 'Marketing'){
        document.getElementById(`category${index}`).style.backgroundColor = "blue";
    };

    if(category == 'Product'){
        document.getElementById(`category${index}`).style.backgroundColor = "green";
    };

    if(category == 'Sale'){
        document.getElementById(`category${index}`).style.backgroundColor = "yellow";
    };

    if(category == 'Controlling'){
        document.getElementById(`category${index}`).style.backgroundColor = "red";
    };
}

function checkCurrentUser() {
    if (localStorage.getItem('currentUser')) { // Check if user exists
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        document.getElementById('user-pic').src = currentUser.image;
    }
}

function logout() {
    localStorage.removeItem('currentUser');
}

window.onload = init;

function init() {
    checkCurrentUser();
    includeHTML();
}


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
