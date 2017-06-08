$ = require('jquery');
require('../utils.js');
require('./object.js');
require('./bomb.js');
require('./game.js');

$(function(){
    var canvasEl = document.getElementById("boom-canvas");
    canvasEl.width = 1200;
    canvasEl.height = 800;
    var ctx = canvasEl.getContext("2d");
    var game = new Boom.Game([1200, 800], ctx);
    game.initGame();
});