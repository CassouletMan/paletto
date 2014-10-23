'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {

    var g = new Engine();
    g.init();
    assertTrue(g.juxtapo());
};