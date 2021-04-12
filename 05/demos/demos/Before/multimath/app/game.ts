/// <reference path="./utility.ts" />
/// <reference path="./result.ts" />
/// <reference path="./player.ts" />
/// <reference path="./scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }
}