/**
 * Created by mgasca on 05/02/15.
 */
var MAIN = (function($, createjs, m, r){

    var texture = {
        "images": ["assets/symbols.png"],
        "frames": [

            [140, 2, 144, 136],
            [432, 2, 145, 135],
            [286, 2, 144, 136],
            [835, 2, 134, 126],
            [2, 2, 136, 138],
            [579, 2, 132, 131],
            [1224, 2, 118, 126],
            [1344, 2, 129, 124],
            [713, 2, 120, 130],
            [1475, 2, 125, 123],
            [971, 2, 128, 126],
            [1101, 2, 121, 126]
        ],
        "animations": {

            "hive":[0],
            "queenbee":[1],
            "bee":[2],
            "honey":[3],
            "sunflower":[4],
            "ladybug":[5],
            "A":[6],
            "K":[7],
            "Q":[8],
            "J":[9],
            "10":[10],
            "9":[11]
        }
    };

    var Game = function(canvas, speed){
        this.speed = speed || 60;
        this.stage = new createjs.Stage(canvas);
        this.atlas = new createjs.SpriteSheet(texture);

        createjs.Ticker.addEventListener('tick', this.update.bind(this));

    };

    Game.prototype.init = function() {
        this.reelsContainer = new r.ReelsContainer(m.Model.reel_configs,{},this.atlas, this.stage);

    };

    Game.prototype.update = function() {
        //if (this.symbol.y > 696 ) this.symbol.y = 0;
        //this.symbol.y = this.symbol.y + this.speed;

        this.stage.update(event);
    };

    return {
        Game: Game
    };

}(jQuery, createjs, MODEL, REELS));
