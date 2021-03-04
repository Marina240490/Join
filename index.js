let user = [
    {
        'name': 'Marina',
        'password': 'Marina123!',
        'image': 'img/marina.jpg',
        'e-mail': 'marina@join.de',
    },
    {
        'name': 'Yvonne',
        'password': 'Yvonne123!',
        'image': 'img/yvonne.jpg',
        'e-mail': 'yvonne@join.de',
    },
    {
        'name': 'Steffi',
        'password': 'Steffi123!',
        'image': 'img/steffi.jfif',
        'e-mail': 'steffi@join.de',
    },
    {
        'name': 'Junus',
        'password': 'Junus123!',
        'image': 'img/junus.jfif',
        'e-mail': 'junus@join.de',
    }
];

/**
 * Login function to enter the main page
 */

function login(i) { 
    let loginSuccessful = false; //Loginverfahren definieren
    for (let i = 0; i < user.length; i++) { 
        if (username.value == user[i]['name'] && (password.value) == user[i]['password']) { //Wenn Wert des Inputs Name und Inputs Passwort passend, dann....
            loginSuccessful = true; //Loginverfahren als erfolgreich deklarieren
            
            document.getElementById('overlay').classList.remove('d-none');
            document.getElementById('overlay').classList.add('overlay');
            document.getElementById('main-section').classList.add('d-none');
        } 
    }
    if(loginSuccessful) { //Loginverfahren erfolgreich deklariert
        setTimeout(function () {
        window.location.href = 'board.html'}, 2000); //Weiterleitung auf die gewünschte Seite (mittels Link)
    } else {
        alert('Falscher Username oder Passwort!'); //Loginverfahren missglückt
    }
}

/**
 * Push Message with "Enter"
 */
function init() {
    document.addEventListener("keydown", function (u) {
        if (u.keyCode == 13) {  //checks whether the pressed key is "Enter"
        login();
    }
    });
}

/**
 * Show picture of currentUser
 */
function currentUser() {
    if (document.getElementById('username').value = 'Marina'); {
        document.getElementById('currentUserpic').src = user[0]['image'];
    }

    if (document.getElementById('username').value = 'Yvonne'); {
        document.getElementById('currentUserpic').src = user[1]['image'];
    }

    if (document.getElementById('username').value = 'Steffi'); {
        document.getElementById('currentUserpic').src = user[2]['image'];
    }

    if (document.getElementById('username').value = 'Junus'); {
        document.getElementById('currentUserpic').src = user[3]['image'];
    }
}


/*

let currentUser = [];
let currentPassword = [];
let profilePictureAsDataURL = [];
let currentProfilePicture = [];
let currentEmail = [];

setURL('http://gruppe-51b.developerakademie.com/json_to_server');


 * This function is used to sign up a new user for JOIN.

function signUp() {
    let picture = profilePictureAsDataURL;
    if (profilePictureAsDataURL.length == 0) {
        picture = "img/profileimg/nutzer.svg";
    }

    addUser(picture);
}


 * This function is used to add a new user to the users of JOIN.
 * @param {string} picture - This is the URL of the profile picture of the user.
 
function addUser(picture) {
    newUsername = document.getElementById("username");
    newPassword = document.getElementById("password");
    newEmail = document.getElementById("email");
    if (users.find((e) => e["username"] == newUsername)) {
        alert("This user is already taken");
    } else {
        let user = generateUser(picture);
        users.push(user);
        backend.setItem('users', JSON.stringify(users));
        closeRegistration();
        alert("Your Sign Up was successful!");

        let i = users.length - 1;
        loginCurrentUser(i);
    }
}

 * This function generates the user data for a new user.
 * @param {string} picture - This is the URL of the profile picture of the user.
function generateUser(picture) {
    return {
        username: newUsername.value,
        email: newEmail.value,
        password: sha256(newPassword.value),
        profilePicture: picture,
    };
}

 * This function is used to login the user into the JOIN website by getting the username and password of the user.

function login() {
    currentUsername = document.getElementById("currentUsername");
    currentPassword = document.getElementById("currentPassword");
    let userfound = false;
    checkIfLoginIsCorrect(userfound, currentUsername, currentPassword);
}


 * This function checks if the entered login data matches with the data of the signed up users. If the data is correct the user is located
 * to the matrix and saved as the current user in the local storage. If the data is incorrect the user gets an alert.
 * @param {boolean} userfound - This value expresses if the login data is correct.
 * @param {string} currentUsername - This is the username that the user entered in the login.
 * @param {string} currentPassword - This is the password that the user entered in the login.
 
function checkIfLoginIsCorrect(userfound, currentUsername, currentPassword) {
    for (i = 0; i < users.length; i++) {
        if (
            currentUsername.value == users[i].username &&
            sha256(currentPassword.value) == users[i].password
        ) {
            userfound = true;
            loginCurrentUser(i);
        }
    }
    if (!userfound) {
        alert("Wrong Username or Password!");
    }
}


 * This function logs in the current user into the JOIN portal.

function loginCurrentUser(i) {
    generateUserLogin(i);
    saveCurrentUserInLocalStorage();
    window.location.href = "matrix.html";
}


 * This function generates the user login data.
 
function generateUserLogin(i) {
    findProfile(i);
    let userLogin = {
        username: currentUsername,
        email: currentEmail,
        profilePicture: currentProfilePicture,
    };
    currentUser.push(userLogin);
}

 * This function is used to find the profile picture and email of the user that enteres his/hers login data.
 
function findProfile(i) {
    currentUsername = users[i].username;
    currentPassword = users[i].password;
    currentProfilePicture = users[i].profilePicture;
    currentEmail = users[i].email;
}

 * This function saves the login data of the user that is currently logged in in the local storage.
 
function saveCurrentUserInLocalStorage() {
    let currentUserAsString = JSON.stringify(currentUser);
    localStorage.setItem("currentUser", currentUserAsString);
}


 * This function loads the data of all signed up users from the local storage and saves them in the users array when the page is loaded.
 
async function loadAllUsers() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}


 * This function deletes the currently logged in user.
 
function logOutCurrentUser() {
    currentUser = [];
    saveCurrentUserInLocalStorage();
}


 * This function opens the window and the background for the sign up.
 
function openRegistration() {
    document
        .getElementById("registration-container-overlay")
        .classList.remove("d-none");
    document.getElementById("registration-container").classList.remove("d-none");
}


 * This function closes the window and the background for the sign up.
 
function closeRegistration() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("standardProfilePicture").classList.remove("d-none");
    document.getElementById("newProfilePicture").classList.add("d-none");
    document
        .getElementById("registration-container-overlay")
        .classList.add("d-none");
    document.getElementById("registration-container").classList.add("d-none");
}


 * This function loads the currently logged in user.
 
function loadCurrentUser() {
    let currentUserAsString = localStorage.getItem("currentUser");

    if (currentUserAsString) {
        currentUser = JSON.parse(currentUserAsString);
    }
}*/