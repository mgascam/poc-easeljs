/**
 * Created by mgasca on 05/02/15.
 */
var MAIN = (function($, createjs){

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

            "symbol__0000s_0000s_0000_hive":[0],
            "symbol__0000s_0001_Queenbee":[1],
            "symbol__0000s_0001s_0000_Bee":[2],
            "symbol__0000s_0002_Honey":[3],
            "symbol__0000s_0003_Sunflower":[4],
            "symbol__0000s_0004_Ladybug":[5],
            "symbol__0000s_0005_A":[6],
            "symbol__0000s_0006_K":[7],
            "symbol__0000s_0007_Q":[8],
            "symbol__0000s_0008_J":[9],
            "symbol__0000s_0009_10":[10],
            "symbol__0000s_0010_9":[11]
        }
    };

    var Game = function(canvas, speed){
        this.speed = speed || 60;
        this.stage = new createjs.Stage(canvas);
        this.atlas = new createjs.SpriteSheet(texture);

        createjs.Ticker.addEventListener('tick', this.update.bind(this));

    };

    Game.prototype.init = function() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(100, 10, 100);
        circle.y = 100;
        this.stage.addChild(circle);
        debugger;
        this.symbol = new createjs.Sprite(this.atlas);
        this.symbol.gotoAndStop('symbol__0000s_0000s_0000_hive');
        this.stage.addChild(this.symbol);
    };

    Game.prototype.update = function() {
        if (this.symbol.y > 696 ) this.symbol.y = 0;
        this.symbol.y = this.symbol.y + this.speed;

        //this.stage.update(event);
    };

    return {
        Game: Game
    };

}(jQuery, createjs));
