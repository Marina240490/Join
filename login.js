/**
 * Login function to enter the main page
 */

function login(i) { 
    let loginSuccessful = false; //Loginverfahren definieren
    for (let i = 0; i < user.length; i++) { 
        if (username.value == user[i]['name'] && (password.value) == user[i]['password']) { //Wenn Wert des Inputs Name und Inputs Passwort passend, dann....
            loginSuccessful = true; //Loginverfahren als erfolgreich deklarieren
            alert('Login erfolgreich!');
        } 
    }
    if(loginSuccessful) { //Loginverfahren erfolgreich deklariert
      window.location.href = 'board.html'; //Weiterleitung auf die gewünschte Seite (mittels Link)
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
/*
function loadMyUser() {
    let myUser = JSON.parse(localStorage.getItem('currentUser'));
    document.getElementById('user-pic').src = myUser.image;
}


sha256
*/