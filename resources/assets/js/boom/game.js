(function(){
    if (typeof Boom === "undefined"){
        window.Boom = {};
    }

    var boomGame = Boom.Game = function(dem, ctx){
        this.objects = [];
        this.ctx = ctx;
        this.width = dem[0];
        this.height = dem[1];
    };

    boomGame.prototype.initGame = function(){
        var game = this;
        game.fireBomb();
        this.timerId = setInterval(function(){
            game.step();
        }, 50);
    };

    boomGame.prototype.fireBomb = function(){
        var bomb = new Boom.Bomb(this, [2, -35], [10, this.height]);
        this.objects.push(bomb);
    };

    boomGame.prototype.display = function(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, this.width, this.height);
        for (var i = 0; i < this.objects.length; i++){
            this.objects[i].draw(this.ctx);
        }
    };

    boomGame.prototype.step = function(){
        for (var i = 0; i < this.objects.length; i++){
            this.objects[i].move();
        }
        this.display();
    };

    boomGame.prototype.remove = function (object) {

    }

})();