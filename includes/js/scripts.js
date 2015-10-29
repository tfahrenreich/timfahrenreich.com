!function () {
    window.Tfahrenreich = {
        name: 'Tfahrenreich',
        version: '1.3',
        options: {
            addPizza: false,
            seizure: false
        },
        init: function () {
            window._T = Tfahrenreich;
            this.windowResize.init();
            this.onScroll.init();
        },
        helpers: {
            getWidth: function () {
                return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            },
            getHeight: function () {
                return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            }
        },
        windowResize: {
            init: function () {
                window.onresize = function () {
                    var functions = $.map(_T.windowResize, function (value, index) {
                        return value;
                    });
                    for (i = 1; i < functions.length; i++) {
                        functions[i]();
                    }
                };
                window.onresize();
            },
            minHeight: function () {
                /**Sets <sections>'s min-height to viewport height for full frame sections*/
                var $target = $('section[data-resize]');
                if ($target.length > 0) {
                    var $windowHeight = _T.helpers.getHeight()-20;
                    _T._data.windowHeight = $windowHeight;
                    $target.css('min-height', $windowHeight + 'px');
                }
            }
        },
        onScroll: {
            init: function () {
                $(window).scroll(function () {
                    var functions = $.map(Tfahrenreich.onScroll, function (value, index) {
                        return value;
                    });
                    for (i = 1; i < functions.length; i++) {
                        functions[i]();
                    }
                });
                $(window).scroll();
            },
            menu: function (n) {
                n = $('nav');
                if($('body').scrollTop()>(_T._data.windowHeight-n.outerHeight())){
                    n.css('background', '#008080')
                }else{
                    n.css('background', '')
                }
            },
            seizure: function () {
                if (_T.options.seizure == true) {
                    $('section').each(function () {
                        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                        $(this).css('background', "#" + randomColor);
                    })
                }
            },
            addPizza: function () {
                if (_T.options.addPizza == true) {
                    if (_T._data.pizzaCount == undefined) {
                        _T._data.pizzaCount = 1
                    } else {
                        _T._data.pizzaCount++
                    }
                    var animation = (_T._data.pizzaCount%2 === 0) ? 'floating' : 'scaling';
                    var x = Math.floor(Math.random() * _T.helpers.getWidth());
                    var y = Math.floor(Math.random() * _T.helpers.getHeight());
                    $('body').append("<img src='http://a.deviantart.net/avatars/p/i/pizza-in-flames.gif?1' class='"+animation+"' style='position: fixed; top:" + y + "px;left:" + x + "px;'>");
                }
            }
        },
        _data: {}
    };
}();

!function () {
    Tfahrenreich.init();
    //Intro Animation
    !function(h,f,b){
        f.css('height',h+20);
        f.slideDown(1000,function(){
            b.animate({'padding': '10px'}, 1000,function(){
                f.css({'height':'', 'min-height' : h}).attr('data-resize','');
            });
            f.animate({'height':h}, 1000);

            var letters = [], randomColor, animationTime;
            randomColor = function () {
                var colors = ['#356565', '#006A80', '#2C5D5D', '#47C3C3', '#16AF98', '#0EA58E', '#3EBFAC', '#24B5B5', '#71B09F'];
                return colors[Math.round(Math.random() * (9 - 1) + 1)];
            };
            animationTime = function () {
                return Math.round((Math.random() * (6 - 3) + 3) * 10) / 10+ 's ease color';
            };

            $('.letter-container').each(function () {
                var chars = $(this).text().split('');
                var $thisContainer = $(this);
                $thisContainer.empty();
                $.each(chars, function (i, l) {
                    var appendix = $('<span>' + l + '</span>');
                    $thisContainer.append(appendix);
                    letters.push(appendix);
                });
            });

            setTimeout(function () {
                $.each(letters, function (i, l) {
                    $(l).css({
                        'transition': animationTime,
                        '-moz-transition': animationTime,
                        '-webkit-transition': animationTime,
                        'color': '#24B5B5'
                    });
                });
            }, 0);
            !function animationLoop(i) {
                setTimeout(function () {
                    _T._data.loopIteration = i;
                    $.each(letters, function (i, l) {
                        $(l).css({
                            'color': randomColor,
                            'transition': animationTime,
                            '-moz-transition': animationTime,
                            '-webkit-transition': animationTime
                        });
                    });
                    if(i == 0){
                        $('section').slideDown();
                        $('nav').slideDown();
                        f.find('p').slideDown(1000);
                    }
                    i++;
                    animationLoop(i)
                }, 2000);
            }(0);
        });
    }(_T._data.windowHeight, $('#home-slide'), $('body'));
}();


