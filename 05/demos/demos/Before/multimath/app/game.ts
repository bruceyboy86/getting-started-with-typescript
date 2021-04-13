/// <reference path="./utility.ts" />
/// <reference path="./result.ts" />
/// <reference path="./player.ts" />
/// <reference path="./scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame(): void{

        // create HTML for the current game
        let gameForm: string = '';
        for (let i = 1; i < this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer'+i+'" class="col-sm-2 control-label">';
            gameForm += String(this.factor)+' x '+i+' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer'+i+'" size="5"/></div>';
            gameForm += '</div>';            
        }

        // add the new game to the page
        const getElement: HTMLElement = document.getElementById('game')!;
        getElement.innerHTML = gameForm;

        // enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }
}