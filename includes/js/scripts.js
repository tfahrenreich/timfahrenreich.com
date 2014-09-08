$(function(){
    window.Tfahrenreich = {
        name : 'Tfahrenreich',
        version : '1.0',
        init : function(){
            this.openingAnimation();
            this.windowResize.init();
            this.onScroll.init();
        },
        helpers : {
            getWidth: function(){
                return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            },
            getHeight: function(){
                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            }
        },
        windowResize: {
            init : function(){
                window.onresize =  function(){
                    var functions = $.map(Tfahrenreich.windowResize, function(value, index){
                        return value;
                    });
                    for (i = 1; i < functions.length; i++) {
                        functions[i]();
                    }
                };
                window.onresize();
            },
            minHeight : function(){
                /**Sets <sections>'s min-height to viewport height for full frame sections*/
                var $target = $('section');
                if($target.length > 0){
                    var $windowHeight = Tfahrenreich.helpers.getHeight();
                    console.log($windowHeight);
                    $target.css('min-height', $windowHeight+'px');
                }
            }
        },
        onScroll: {
            init : function(){
                $(window).scroll(function(){
                    var functions = $.map(Tfahrenreich.onScroll, function(value, index){
                        return value;
                    });
                    for (i = 1; i < functions.length; i++) {
                        functions[i]();
                    }
                });
                $(window).scroll();
            },
            scrollfunc : function(){
                $('section').each(function(){
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    $(this).css('background', "#"+randomColor);
                })
            }
        },
        openingAnimation : function(){
            console.log("sd");
        }
    };
});

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