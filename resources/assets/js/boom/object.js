(function() {
    if (typeof Boom === "undefined") {
        window.Boom = {};
    }
    
    var Obj = Boom.Object = function(options){
        this.game = options.game;
        this.vel = options.vel;
        this.pos = options.pos;
        this.dem = options.dem;
        this.sprite = options.sprite;
    };

    Obj.prototype.move = function(){
        if (this.pos[1] < this.game.height - 30){
            this.vel = [this.vel[0], this.vel[1] + 1];
        } else if (this.pos[1] > this.game.height + 8) {
            this.vel = [this.vel[0], -(this.vel[1] - 3)];
        }
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    };

    Obj.prototype.draw = function(ctx){
        ctx.drawImage(this.sprite, this.pos[0] - this.dem / 8, this.pos[1] - this.dem, this.dem, this.dem);
    }
    
})();