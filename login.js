function login(i) {
    for (let i = 0; i < user.length; i++) {
    
        if (username.value == user[i]['name'] && (password.value) == user[i]['password']) {
            alert('Login erfolgreich');
        } else {
            alert('Wir sind dumm');
        }
    }
}

//sha256

//href="board.html" 