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
    assertTrue(g.ColorOfNbJetonJouable("blanc"));
    assertTrue(g.ColorOfNbJetonJouable("bleu"));
    assertTrue(g.ColorOfNbJetonJouable("noir"));
    assertTrue(g.ColorOfNbJetonJouable("rouge")==false);
    assertTrue(g.ColorOfNbJetonJouable("vert")==false);
    assertTrue(g.ColorOfNbJetonJouable("jaune")==false);
    g.chooseColor("noir");
    //console.log(g.countColorOfCurrentPlayer());
    assertTrue(g.countColorOfCurrentPlayer("noir")==2);
};

