
//Overlay for details
function showDetails() {
    document.getElementById('openDetails').classList.remove('d-none-details');
}

function closeDetails() {
    document.getElementById('openDetails').classList.add('d-none-details');
}


async function initBacklog(){
    await loadAllTasks();
    showBacklog();
}

/**
 * Posting pin at board
 */
function showBacklog(){
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];

        document.getElementById('to-do-area').innerHTML += ` <div class="pin" id="dragelement[i]" ondragstart="dragStart(event)">
            <div class="first-row-pin">
                <p class="p-header">${element['title']}</p>
                <img src="img/X.svg" class="X-pin" onclick="deletePin()">
            </div>
            
            <div class="second-row-pin">
                <p class="p-pin">${element['date']}</p>
                <p class="p-pin">${element['urgency']}</p>
                <div class="picrow-pin">
                    <img src="${element['author']}" class="user-pic-pin">
                    <p class="p-category">${element['category']}</p>
                </div>
            </div>
            <div class="pin-color" id="pin-color"></div>
        </div> 
        `
    }  
}