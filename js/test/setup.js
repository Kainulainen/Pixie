define(function (require) {
    var $ = require('jquery')
    var mocha = require('mocha')
    var chai = require('chai')
    var sinonChai = require("sinon-chai");
    mocha.setup('bdd');
    chai.use(sinonChai);
    $('<link rel="stylesheet" href="js/test/mocha.css"/>').prependTo('head')
    $('<div id="mocha"></div>').appendTo('body')
})