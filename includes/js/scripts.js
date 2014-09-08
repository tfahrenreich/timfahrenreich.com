var Tfahrenreich = {
    name : 'Tfahrenreich',
    version : '1.0',
    init : function(){
        this.windowResize();
        this.openingAnimation();
        window.onresize = function() {
            tfahrenreich.windowResize();
        };
    },
    helpers : {
        getWidth: function(){
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        },
        getHeight: function(){
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        }
    },
    windowResize: function(){
        /**Sets <sections>'s min-height to viewport height for full frame sections*/
        var $target = $('section');
        if($target.length > 0){
            var $windowHeight = this.helpers.getHeight();
            console.log($windowHeight);
            $target.css('min-height', $windowHeight+'px')
        }
    },
    openingAnimation : function(){
        console.log("sd");
    }
};

$(document).ready(function(){
    Tfahrenreich.init()
});

/*
var header_helpers = function(class_array){
    var i  = class_array.length;
    while(i--){
        console.log(class_array[i])
    }
};
header_helpers([
    'foundation-mq-small',
    'foundation-mq-medium',
    'foundation-mq-large',
    'foundation-mq-xlarge',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);
*/