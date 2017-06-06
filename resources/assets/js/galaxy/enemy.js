(function () {
  if (typeof Galaxy === "undefined") {
    window.Galaxy = {};
  }

  var Enemy = Galaxy.Enemy = function (options) {
	   this.game = options.game;
    var sprite = new Image();
    sprite.src = ["./images/galaxy/enemy.gif", "./images/galaxy/enemy2.png"][Math.floor(Math.random() * 2)];
    options.color = Enemy.COLOR;
    options.pos = options.pos || [Math.random() * Galaxy.Game.DIM_X, 1];
    options.radius = Enemy.RADIUS;
    options.vel = options.vel || [0, (Math.random() * 4) + 1];
    options.dem = 60;
    options.sprite = sprite;
    Galaxy.MovingObject.call(this, options);
  };

  Enemy.COLOR = "#009999";
  Enemy.RADIUS = 30;
  Enemy.SPEED = 4;

  Galaxy.Util.inherits(Enemy, Galaxy.MovingObject);

  Enemy.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Galaxy.Ship) {
      this.game.remove(otherObject);
    }
  };

  Enemy.prototype.isWrappable = false;
})();
