require('./util.js');
require('./game.js');
require('./gameView.js');
require('./movingObject.js');
require('./expandingObject.js');
require('./bigenemy.js');
require('./bigexplosion.js');
require('./bullet.js');
require('./enemy.js');
require('./explosion.js');
require('./puff.js');
require('./ship.js');
require('./spark.js');

(function(){
    var canvasEl = document.getElementsByTagName("canvas")[0];
    canvasEl.width = Galaxy.Game.DIM_X;
    canvasEl.height = Galaxy.Game.DIM_Y;
    var ctx = canvasEl.getContext("2d");
    var game = new Galaxy.Game();
    var view = new Galaxy.GameView(game, ctx);
    view.start();
})();
