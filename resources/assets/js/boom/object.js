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

    Obj.prototype.onTheGround = function(){
        return this.pos[1] >= (this.game.height - this.game.groundLevel);
    };

    Obj.prototype.belowTheGround = function(){
        return this.pos[1] > (this.game.height - this.game.groundLevel);
    };

    Obj.prototype.bounceOfGround = function(){
        this.vel = [this.vel[0], -(this.vel[1] - 3)];
    };

    Obj.prototype.accelerateTowardsGround = function(){
        this.vel = [this.vel[0], this.vel[1] + 1];
    };

    Obj.prototype.move = function(){
        if (!this.onTheGround()){
            this.accelerateTowardsGround();
        } else if (this.onTheGround() && this.vel[1] > 0) {
            this.bounceOfGround();
        }
        if (this.belowTheGround()) {
            this.pos = [this.pos[0], this.game.height - this.game.groundLevel];
            this.vel = [this.vel[0], 0];
        }

        //put collision logic here

        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    };

    Obj.prototype.draw = function(ctx){
        ctx.drawImage(this.sprite, this.pos[0] - this.dem / 8, this.pos[1] - this.dem, this.dem, this.dem);
    }
    
})();