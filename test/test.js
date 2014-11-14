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
    assertTrue(g.getColorAt(0,5)=="jaune");
};