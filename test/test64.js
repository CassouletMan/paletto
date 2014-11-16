'use strict';

// BY DELPLANQUE AND DELAHAYE

var PalettoTestCase = TestCase("PalettoTestCase64");

PalettoTestCase.prototype.testStory8 = function () {

    var g = new Engine();
    g.initWithSize(8);
    assertTrue(g.juxtapo());
};