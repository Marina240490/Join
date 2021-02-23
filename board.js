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

function deletePin() {
    document.getElementById('pin').classList.remove('pin');
    document.getElementById('pin').classList.add('d-none');
}

function pushRight() {
    document.getElementById('progress-area').innerHTML = `
        <div class="pin" id="pin">
                                <div class="first-row-pin">
                                    <p class="p-header">Title</p>
                                    <img src="img/X.svg" class="X-pin" onclick="deletePin()">
                                </div>
                                
                                <div class="second-row-pin">
                                    <p class="p-pin">23.02.2021</p>
                                    <p class="p-pin">Category</p>
                                    <p class="p-pin">Urgency</p>
                                    <img src="img/user-pic.jpg" class="user-pic-pin">
                                    <div class="arrows-pin">
                                        <img src="img/arrow.svg" class="arrow-pin-left">
                                        <img src="img/arrow.svg" class="arrow-pin-right" onclick="pushRight()">
                                    </div>
                                </div>
                            </div>
    `;

    deletePin();
}