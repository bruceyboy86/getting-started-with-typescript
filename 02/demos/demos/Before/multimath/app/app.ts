
function startGame() {

    let playerName: string | undefined = getInputValue('playername')
    logPlayer(playerName)
    postScore(80, playerName)
}

function logPlayer(name:string = 'Multimath player'): void {
    console.log(`New game starting for player: ${name}`)
}

function getInputValue(elementId:string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)

    if (inputElement.value === '') {
        return undefined
    } else {
        return inputElement.value;
    }
}

function postScore(score:number, playerName: string = 'Multimath player'):void {
    const scoreElement:HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
    
}

document.querySelector('#startGame')!.addEventListener('click', startGame); 


