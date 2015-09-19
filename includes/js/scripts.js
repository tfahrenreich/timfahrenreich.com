$(function(){
    window.Tfahrenreich = {
        name : 'Tfahrenreich',
        version : '1.1',
        options: {
            addPizza: false,
            seizure: false
        },
        init : function(){
            window._T = Tfahrenreich;
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
                    var functions = $.map(_T.windowResize, function(value, index){
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
                    var $windowHeight = _T.helpers.getHeight();
                    //console.log($windowHeight);
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
            seizure : function(){
                if(_T.options.seizure == true){
                    $('section').each(function(){
                        var randomColor = Math.floor(Math.random()*16777215).toString(16);
                        $(this).css('background', "#"+randomColor);
                    })
                }
            },
            addPizza : function(){
                if(_T.options.addPizza == true){
                    if(_T._data.pizzaCount == undefined){_T._data.pizzaCount = 1}else{_T._data.pizzaCount++}
                    var x = Math.floor(Math.random() * _T.helpers.getWidth());
                    var y = Math.floor(Math.random() * _T.helpers.getHeight());
                    $('body').append("<img src='http://a.deviantart.net/avatars/p/i/pizza-in-flames.gif?1' style='position: fixed; top:" + y + "px;left:"+ x +"px;'>");
                }

            }
        },
        _data:{}
    };
});

$(document).ready(function(){
    Tfahrenreich.init()
});

$(function(){
    function letterAnimation(letter){
        var animationTime = (Math.round(Math.random()*5 * 10)/10);
        console.log(letter);
        $(letter).css({ 'transition' : animationTime+'s ease'});
        setInterval(function(){
            $(letter).css('color', '#'+Math.floor(Math.random()*16777215).toString(16));
        }, 2000)
    }

    $('.letter-container').each(function(){
        var chars = $(this).text().split('');
        var $thisContainer = $(this);
        $thisContainer.empty();
        $.each(chars,function(i,l){
            var appendix = $('<span>'+l+'</span>');
            $thisContainer.append(appendix);
            letterAnimation(appendix);
        });
    });

});