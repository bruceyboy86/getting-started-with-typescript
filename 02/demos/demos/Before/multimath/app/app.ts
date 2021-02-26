
function startGame() {

    let playerName: string = 'Bruce'
    logPlayer(playerName)
    // comment
    let messagesEl:HTMLElement = document.getElementById('messages')
    messagesEl.innerText = 'wassaaap';
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

document.querySelector('#startGame')?.addEventListener('click', startGame); 


