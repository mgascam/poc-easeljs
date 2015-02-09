/**
 * Created by miguel on 8/02/15.
 */

/**
 * Created by miguel on 8/02/15.
 */


var SYMBOL = (function (cjs) {

    //var SymbolClass = function(posX, posY, width, height, spriteName){
    //    e.EntityClass.call(this, posX, posY, width, height, spriteName)
    //};
    //
    //SymbolClass.prototype = Object.create(e.EntityClass.prototype);
    //SymbolClass.prototype.constructor = SymbolClass;
    //
    //SymbolClass.prototype.draw = function() {
    //    console.log('Symbol Draw');
    //};
    //SymbolClass.prototype.update = function() {
    //    console.log('Symbol Update');
    //};

    function Symbol(spriteSheet){
        this.Sprite_constructor(spriteSheet);
    };

    var p = cjs.extend(Symbol, cjs.Sprite);

    window.Symbol = cjs.promote(Symbol, 'Sprite')

    return {
        Symbol: Symbol
    }
})(createjs);