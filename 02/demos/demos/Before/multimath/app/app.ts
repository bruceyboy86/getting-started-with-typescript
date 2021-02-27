
function startGame() {

    let playerName: string = 'bruce'
    logPlayer(playerName)
    // comment
    let messagesEl = document.getElementById('messages')
    messagesEl!.innerText = 'wassaaap' ;
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

document.querySelector('#startGame')?.addEventListener('click', startGame); 


