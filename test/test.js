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
    assertTrue(g.getColorAt('A',6)==null);
    assertTrue(g.count()==35);
    assertTrue(g.countColorOfCurrentPlayer("jaune")==1);
};

PalettoTestCase.prototype.testStory4 = function () {

    var g = new Engine();
    g.init();
    g.takeAt('A',6);
    g.change_player();
    assertTrue(g.getCurrentPlayer()=="Joueur2");
    assertTrue(g.listOfPossibilities()==5);
    assertTrue(g.ColorOfJetonJouable("blanc"));
    assertTrue(g.ColorOfJetonJouable("bleu"));
    assertTrue(g.ColorOfJetonJouable("noir"));
    assertTrue(g.ColorOfJetonJouable("rouge")==false);
    assertTrue(g.ColorOfJetonJouable("vert")==false);
    assertTrue(g.ColorOfJetonJouable("jaune")==false);
    g.chooseColor("noir");
    //console.log(g.countColorOfCurrentPlayer());
    //g.showtabPlayers();
    //g.showlistOfJetonJouable();
    assertTrue(g.countColorOfCurrentPlayer("noir")==2);
};

PalettoTestCase.prototype.testStory5 = function () {

};

