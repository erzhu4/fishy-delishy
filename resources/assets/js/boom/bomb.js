(function() {
    if (typeof Boom === "undefined") {
        window.Boom = {};
    }

    var Bomb = Boom.Bomb = function(game, vel, pos){
        var options = {};
        options.game = game;
        options.vel = vel;
        options.pos = pos;
        options.dem = 30;
        var sprite = new Image();
        sprite.src = "./images/boom/bomb.png";
        options.sprite = sprite;
        Boom.Object.call(this, options);
    };

    Util.inherits(Bomb, Boom.Object);

})();