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