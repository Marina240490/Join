/**
 * Function for responsive Menu for all pages! (Never delete!!!!!!)
 */
let show; show = false ;

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

let id;

function deletePin() {
    document.getElementById('pin').classList.remove('pin');
    document.getElementById('pin').classList.add('d-none');
}

function dropPin(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    id=ev.target.id;
}

function drop(ev) {
    ev.target.append(document.getElementById(id));
}