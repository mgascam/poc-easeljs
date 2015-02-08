/**
 * Created by miguel on 8/02/15.
 */

/**
 * Created by miguel on 8/02/15.
 */


var SYMBOL = (function (e) {

    var SymbolClass = function(posX, posY, width, height, spriteName){
        e.EntityClass.call(this, posX, posY, width, height, spriteName)
    };

    SymbolClass.prototype = Object.create(e.EntityClass.prototype);
    SymbolClass.prototype.constructor = SymbolClass;

    SymbolClass.prototype.draw = function() {
        console.log('Symbol Draw');
    };
    SymbolClass.prototype.update = function() {
        console.log('Symbol Update');
    };


    return {
        SymbolClass: SymbolClass
    }
})(ENTITY);