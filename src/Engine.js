'use strict';

var Engine = function () {

    var game_board = new Array(6);


    this.init = function (player_begin) {

        var iterator;



        for (iterator = 0; iterator < 6; iterator++) {
            game_board[iterator] = new Array(6);
        }
    };
};
