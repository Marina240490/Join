
async function initBoard(){
    await loadAllTasks();
    showBoard();
}

function showBoard(){
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];

        document.getElementById('to-do-area').innerHTML += ` <div class="pin" id="dragelement" ondragstart="dragStart(event)">
        <div class="first-row-pin">
            <p class="p-header">${element['title']}</p>
            <img src="img/X.svg" class="X-pin" onclick="deletePin()">
        </div>
        
        <div class="second-row-pin">
            <p class="p-pin">${element['date']}</p>
            <p class="p-pin">${element['category']}</p>
            <p class="p-pin">${element['urgency']}</p>
            <img src=src="${element['author']}"  class="user-pic-pin">
            <img src="img/arrows.svg" class="arrow-pin">
        </div>
        </div>
        `
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