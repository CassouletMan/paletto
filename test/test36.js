'use strict';

// BY DELPLANQUE AND DELAHAYE

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {

    var g = new Engine();
    g.init();
    assertTrue(g.juxtapo());
};

PalettoTestCase.prototype.testStory2 = function () {

    var g = new Engine();
    g.init();
    assertTrue(g.getCurrentPlayer()=="Joueur1");
    assertTrue(g.getColorAt('A',6)=="jaune");
};


PalettoTestCase.prototype.testStory3 = function () {

    var g = new Engine();
    g.init();
    g.takeAt('A',6);
    assertTrue(g.getCurrentPlayer()=="Joueur1");
    assertTrue(g.getColorAt('A',6)=="VIDE");
    assertTrue(g.count()==35);
    assertTrue(g.countColorOfCurrentPlayer("jaune")==1);
};

PalettoTestCase.prototype.testStory4 = function () {

    var g = new Engine();
    g.init();
    g.takeAt('A',6);
    g.change_player();
    assertTrue(g.getCurrentPlayer()=="Joueur2");
    assertTrue(g.numberOfPossibilities()==5);
    assertTrue(g.ColorOfJetonJouable("blanc"));
    assertTrue(g.ColorOfJetonJouable("bleu"));
    assertTrue(g.ColorOfJetonJouable("noir"));
    assertTrue(g.ColorOfJetonJouable("rouge")==false);
    assertTrue(g.ColorOfJetonJouable("vert")==false);
    assertTrue(g.ColorOfJetonJouable("jaune")==false);
    g.chooseColor("noir");
    //console.log(g.countColorOfCurrentPlayer());
    //g.show_tab_players();
    //g.show_list_jeton_jouable();
    assertTrue(g.countColorOfCurrentPlayer("noir")==2);
};

PalettoTestCase.prototype.testStory6 = function () {
    var g = new Engine();
    g.init();
    assertTrue(g.getCurrentPlayer()=="Joueur1");
    assertTrue(g.CurrentPlayerWinOrNot()=="NOT FINISH");
    g.chooseColor("noir");
    assertTrue(g.getColorAt('A',1)=="VIDE");
    assertTrue(g.getColorAt('F',6)=="VIDE");
    g.change_player();
    g.chooseColor("vert");
    g.change_player();
    g.chooseColor("jaune");
    g.change_player();
    g.chooseColor("bleu");
    g.change_player();
    g.chooseColor("blanc");
    g.change_player();
    g.chooseColor("rouge");
    g.change_player();
    g.chooseColor("bleu");
    g.change_player();
    g.chooseColor("jaune");
    g.change_player();
    g.chooseColor("noir");
    assertTrue(g.getCurrentPlayer()=="Joueur1");
    assertTrue(g.CurrentPlayerWinOrNot()=="WIN");

};

PalettoTestCase.prototype.testStory7 = function () {
    var g = new Engine();
    g.init();
    var g = new Engine();
    g.init();
    g.chooseColor("noir");
    g.change_player();
    g.chooseColor("jaune");
    g.change_player();
    g.chooseColor("blanc");
    g.change_player();
    g.chooseColor("vert");
    g.change_player();
    g.chooseColor("bleu");
    g.change_player();
    g.chooseColor("blanc");
    g.change_player();
    g.chooseColor("rouge");
    g.change_player();
    g.chooseColor("bleu");
    g.change_player();
    g.chooseColor("jaune");
    g.change_player();
    g.chooseColor("noir");
    g.change_player();
    g.chooseColor("vert");
    g.change_player();
    g.chooseColor("rouge");
    g.change_player();
    g.chooseColor("blanc");
    g.change_player();
    g.chooseColor("bleu");
    g.change_player();
    g.chooseColor("jaune");
    g.change_player();
    g.chooseColor("vert");
    g.change_player();
    g.chooseColor("bleu");
    g.change_player();
    g.chooseColor("noir");
    g.change_player();
    g.chooseColor("rouge");
    assertTrue(g.getCurrentPlayer()=="Joueur1");
    assertTrue(g.count()==0);
    assertTrue(g.CurrentPlayerWinOrNot()=="WIN");
};

