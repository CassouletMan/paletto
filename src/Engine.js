'use strict';

// BY DELPLANQUE AND DELAHAYE

var Engine = function () {

    var game_board = new Array(6);
    var current_player;
    var tabJoueur1 = new Array(36);
    var tabJoueur2 = new Array(36);



    this.init = function (player_begin) {

        current_player= "Joueur1";

        var iterator;

        for (iterator = 0; iterator < 6; iterator++) {
            game_board[iterator] = new Array(6);
        }

        game_board[0][0]= "noir";
        game_board[1][0]= "vert";
        game_board[2][0]= "blanc";
        game_board[3][0]= "bleu";
        game_board[4][0]= "rouge";
        game_board[5][0]= "blanc";

        game_board[0][1]= "jaune";
        game_board[1][1]= "blanc";
        game_board[2][1]= "vert";
        game_board[3][1]= "rouge";
        game_board[4][1]= "jaune";
        game_board[5][1]= "bleu";

        game_board[0][2]= "bleu";
        game_board[1][2]= "jaune";
        game_board[2][2]= "bleu";
        game_board[3][2]= "blanc";
        game_board[4][2]= "noir";
        game_board[5][2]= "rouge";

        game_board[0][3]= "rouge";
        game_board[1][3]= "noir";
        game_board[2][3]= "rouge";
        game_board[3][3]= "vert";
        game_board[4][3]= "bleu";
        game_board[5][3]= "blanc";

        game_board[0][4]= "blanc";
        game_board[1][4]= "vert";
        game_board[2][4]= "jaune";
        game_board[3][4]= "noir";
        game_board[4][4]= "jaune";
        game_board[5][4]= "vert";

        game_board[0][5]= "jaune";
        game_board[1][5]= "bleu";
        game_board[2][5]= "noir";
        game_board[3][5]= "rouge";
        game_board[4][5]= "vert";
        game_board[5][5]= "noir";


    };


    this.getCurrentPlayer = function(){
        return current_player;
    };


    this.getColorAt = function(i,j) {

        var I;

        switch (i){
            case 'A': I=0; break;
            case 'B': I=1; break;
            case 'C': I=2; break;
            case 'D': I=3; break;
            case 'E': I=4; break;
            case 'F': I=5; break;
        }

        return game_board[I][j-1];
    };


    this.takeAt = function(i,j) {

        var I;

        switch (i){
            case 'A': I=0; break;
            case 'B': I=1; break;
            case 'C': I=2; break;
            case 'D': I=3; break;
            case 'E': I=4; break;
            case 'F': I=5; break;
        }

        if(current_player=="Joueur1")
            tabJoueur1.push(game_board[I][j-1]);
        else
            tabJoueur2.push(game_board[I][j-1]);

        game_board[I][j-1]=null;
    };




    this.juxtapo = function() {


        var i;
        var j;

        for(i = 0; i < 6; i++)
        {
            for(j = 0; j < 6; j++)
            {
                if(j+1<6)
                    if(game_board[i][j] == game_board[i][j+1])
                        return false;

                if(j-1>0)
                    if(game_board[i][j] == game_board[i][j-1])
                        return false;


                if(i+1<6)
                    if(game_board[i][j] == game_board[i+1][j])
                        return false;

                if(i-1>0)
                    if(game_board[i][j] == game_board[i-1][j])
                        return false;

            }
        }

        return true;
    };

    this.count =function(){
        var i;
        var j;
        var res=0;

        for(i = 0; i < 6; i++) {
            for (j = 0; j < 6; j++) {
                if(game_board[i][j]!=null)
                    res++;
            }
        }

        return res;
    }

    this.countColorOfCurrentPlayer = function(color)
    {
        var res=0;

        for(var i =0 ; i< tabJoueur1.length;i++)
        {
            if(tabJoueur1[i]==color)
                res++;
        }

        return res;
    }

};
