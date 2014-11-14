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