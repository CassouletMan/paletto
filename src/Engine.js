'use strict';

// BY DELPLANQUE AND DELAHAYE

var Engine = function () {

    var game_board = new Array(6);
    var current_player;
    var tabJoueur1 = new Array();
    var tabJoueur2 = new Array();
    var JetonJouable = new Array();

    var nbnoir;
    var nbvert;
    var nbrouge;
    var nbjaune;
    var nbblanc;
    var nbbleu;



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


        nbnoir = this.countColorOnGameBoard("noir");
        nbvert = this.countColorOnGameBoard("vert");
        nbrouge = this.countColorOnGameBoard("rouge");
        nbjaune = this.countColorOnGameBoard("jaune");
        nbblanc = this.countColorOnGameBoard("blanc");
        nbbleu = this.countColorOnGameBoard("bleu");


        this.listOfPossibilities();
    };


    this.CurrentPlayerWinOrNot = function (){


        var nbnoirCP = this.countColorOfCurrentPlayer("noir");
        var nbvertCP = this.countColorOfCurrentPlayer("vert");
        var nbrougeCP = this.countColorOfCurrentPlayer("rouge");
        var nbjauneCP = this.countColorOfCurrentPlayer("jaune");
        var nbblancCP = this.countColorOfCurrentPlayer("blanc");
        var nbbleuCP = this.countColorOfCurrentPlayer("bleu");

        if(nbblancCP == nbblanc || nbbleuCP == nbbleu || nbrougeCP == nbrouge || nbnoirCP == nbnoir || nbjauneCP == nbjaune || nbvertCP == nbvert || this.count() == 0)
        {
            return "WIN";
        }

        return "NOT FINISH";
    };

    this.getCurrentPlayer = function(){
        return current_player;
    };


    this.change_player = function () {
        if (current_player == "Joueur1")
            current_player = "Joueur2";
        else
            current_player = "Joueur1";

        JetonJouable=new Array();
        this.listOfPossibilities();
    };

    this.show_tab_players = function ()
    {
        console.log("Joueur 1 :");
        for (var i = 0; i < tabJoueur1.length; i++) {

            console.log(tabJoueur1[i]);

        }

        console.log("\n");
        console.log("Joueur 2 :");
        for (var i = 0; i < tabJoueur2.length; i++) {

            console.log(tabJoueur2[i]);

        }
        console.log("\n");
    };


    this.show_list_jeton_jouable = function ()
    {
        console.log("Liste des jetons jouable:");
        for (var i = 0; i < JetonJouable.length; i=i+3) {

            console.log(JetonJouable[i]);
            console.log(JetonJouable[i+1]);
            console.log(JetonJouable[i+2]);
        }

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

        game_board[I][j-1]="VIDE";
    };

    this.takeAtWithCoordNumber = function(i,j) {

        if(current_player=="Joueur1")
            tabJoueur1.push(game_board[i][j]);
        else
            tabJoueur2.push(game_board[i][j]);

        game_board[i][j]="VIDE";
    };




    this.juxtapo = function() {


        var i;
        var j;

        for(i = 0; i < 6; i++)
        {
            for(j = 0; j < 6; j++)
            {
                if(j+1<=5)
                    if(game_board[i][j] == game_board[i][j+1])
                        return false;

                if(j-1>=0)
                    if(game_board[i][j] == game_board[i][j-1])
                        return false;


                if(i+1<=5)
                    if(game_board[i][j] == game_board[i+1][j])
                        return false;

                if(i-1>=0)
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
                if(game_board[i][j]!="VIDE")
                    res++;
            }
        }

        return res;
    };

    this.countColorOfCurrentPlayer = function(color)
    {
        var res=0;
        if(current_player=="Joueur1") {
            for (var i = 0; i < tabJoueur1.length; i++) {


                if (tabJoueur1[i] == color)
                    res++;

            }
        }
        else
        {
            for (var i = 0; i < tabJoueur2.length; i++) {


                if (tabJoueur2[i] == color)
                    res++;

            }
        }

        return res;
    };

    this.ColorOfJetonJouable = function(color)
    {

        for(var i =0 ; i< JetonJouable.length;i=i+3)
        {
            if(JetonJouable[i]==color)
                return true;
        }

        return false;
    };

    this.chooseColor = function(color)
    {

        var i;
        var j;
        var rst=0;

        for(i = 0; i < JetonJouable.length; i=i+3) {

            //console.log(JetonJouable[i]);

            if(JetonJouable[i] == color) {
                this.takeAtWithCoordNumber(JetonJouable[i+1], JetonJouable[i+2]);

                //console.log(JetonJouable[i+1]);
                //console.log(JetonJouable[i+2]);

            }
        }
    };

    this.countColorOnGameBoard = function(color){
        var rst=0;
        for(var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if (game_board[i][j] == color)
                    rst++;
            }
        }
        return rst;
    };


    this.numberOfPossibilities = function(){
        return (JetonJouable.length/3);
    };

    this.listOfPossibilities = function() {

        var i;
        var j;
        var rst=0;

        for(i = 0; i < 6; i++)
        {
            for(j = 0; j < 6; j++) {

                if (game_board[i][j] != "VIDE") {

                    rst = 0;

                    if (j + 1 < 6)
                        if (game_board[i][j + 1] != "VIDE")
                            rst++;
                    if (j - 1 >= 0)
                        if (game_board[i][j - 1] != "VIDE")
                            rst++;
                    if (i + 1 < 6)
                        if (game_board[i + 1][j] != "VIDE")
                            rst++;
                    if (i - 1 >= 0)
                        if (game_board[i - 1][j] != "VIDE")
                            rst++;

                    //console.log(rst);

                    if (rst <= 2) {
                        JetonJouable.push(game_board[i][j]);
                        JetonJouable.push(i);
                        JetonJouable.push(j);
                    }
                }
                //else
                    //console.log("VIDE");


            }

            //console.log("\n");
        }

        //console.log(JetonJouable.length/3);

    };

};
