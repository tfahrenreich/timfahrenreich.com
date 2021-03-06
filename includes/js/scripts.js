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
                var $windowHeight = _T.helpers.getHeight()-20;
                _T._data.windowHeight = $windowHeight;
                if ($target.length > 0) {
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
                if($('body').scrollTop()>(_T._data.windowHeight-n.outerHeight()-100)){
                    n.addClass('opaque')
                }else{
                    n.removeClass('opaque')
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

    //Nav bindings
    !function(){
        $('nav ul').find('li').on('click', function(){
            var anchor = $("#"+$(this).data('anchor'));
            $('html, body').animate({scrollTop: anchor.offset().top-80},500);

        })

    }();

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
                return Math.round((Math.random() * (5 - 3) + 3) * 10) / 10+ 's ease color';
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
                        $('nav').slideDown(1300);
                        f.find('p').slideDown(1000);
                    }
                    i++;
                    animationLoop(i)
                }, 2500);
            }(0);
        });
    }(_T._data.windowHeight, $('#home-slide'), $('body'));
    //Debris
    !function(d){
        var i;
        //write 15 random animations
        $('head').append("<style id='anima'></style>");
        for(i = 1; i<=15; i++){
            var r = function(){
                var plusOrMinus = Math.random() < 0.5 ? '-':'';
                return plusOrMinus+Math.round((Math.random() * (50 - 20) + 10))+"%"
            };
            var o = function(){
                return Math.round(Math.random()*10)/10
            };
            var d = function(){
                var plusOrMinus = Math.random() < 0.5 ? '-':'';
                return plusOrMinus+Math.round((Math.random() * (45 - 360) + 360))+"deg"
            };
            var css = "@-webkit-keyframes Floating"+[i]+"{" +
                " 0% {opacity: 0; margin: 0 0 0 0; transform: rotate("+d()+")}" +
                " 25% {opacity: "+o()+"; margin: "+r()+" "+r()+" "+r()+" "+r()+"; transform: rotate("+d()+")}" +
                " 50% {opacity: "+o()+"; margin: "+r()+" "+r()+" "+r()+" "+r()+"; transform: rotate("+d()+"))}" +
                " 100% {opacity: 0; margin: "+r()+" "+r()+" "+r()+" "+r()+"; transform: rotate("+d()+")}}" +
                "@-moz-keyframes Floating"+[i]+"{" +
                " 0% {opacity: 0; margin: 0 0 0 0; transform: rotate("+d()+")}" +
                " 25% {opacity: "+o()+"; margin: "+r()+" "+r()+" "+r()+" "+r()+"; transform: rotate("+d()+")}" +
                " 50% {opacity: "+o()+"; margin: "+r()+" "+r()+" "+r()+" "+r()+"; transform: rotate("+d()+"))}" +
                " 100% {opacity: 0; margin: "+r()+" "+r()+" "+r()+" "+r()+"; transform: rotate("+d()+")}}";
            $('#anima').append(css);
        }

        //creates 15 specs and appends them to container
        $('section').find('.debris').each(function(){
            for (i = 1; i<=15; i++){
                var debris = ('<i></i>');
                var animationTime = function () {
                    return Math.round((Math.random() * (80 - 30) + 30) * 10) / 10+ 's';
                };
                var size = Math.round((Math.random() * (60 - 10) + 10) * 10) / 10+'px';
                css = {
                    "top"                                   :   Math.floor(Math.random()* 100) + "%",
                    "left"                                  :   Math.floor(Math.random()* 100) + "%",
                    "width"                                 :   size,
                    "height"                                :   size,
                    "-webkit-animation-name"                :   "Floating"+[i],
                    "-webkit-animation-duration"            :   animationTime(),
                    "-moz-animation-name"                   :   "Floating"+[i],
                    "-moz-animation-duration"               :   animationTime()
                };
                $(debris).css(css).appendTo(this);
            }
        })
    }();

    //project display
    window.projectDisplay = function(event,t,color){
        $('#third').find('span.debris').fadeOut(1000);
        var p = $('#project-viewer');
        var pd = $('#third').find('.panel-display');
        event.preventDefault();

        $.ajax({
            url: "/projects/?p="+t,
            dataType: "html",
            success: function(data){
                setTimeout(function(){
                    $("#loading").fadeOut(function(){
                        p.css('position' , 'static').css('background-color', color);
                        $('#project-viewer-inner').html(data);
                        p.find('.back').fadeIn();
                    });
                },1000);
            },
            beforeSend: function(){
                pd.slideUp(function(){
                    p.animate({'left' : '0%'}, function(){
                        $("#loading").fadeIn();
                    })
                });
            }
        });

        p.find('.back').bind('click', function(){
            $('html, body').animate({scrollTop: p.offset().top-80}, 200 , function(){
                $('#third').find('span.debris').fadeIn(10);
                p.css('position' , 'absolute');
                p.animate({'left' : '105%'}, function(){
                    p.css('background-color', '#FFF');
                    $('#project-viewer-inner').html('');
                });
                pd.slideDown();
                p.find('.back').hide();
            });
            $(this).unbind();
        });
        $('html, body').animate({scrollTop: p.offset().top-80},500);
    };

    //FORM SUBMISSION
    !function(form, submit){
        var $name = $("#name");
        var $email = $("#email");
        var $comments = $("#message");

        $comments.on('focus', function (){
            $comments.css({"height":"200px"})
        });
        submit.on('click', function(){
            var error = this.error;
            error = {} || error;

            if($name.val().length < 3) {
                $name.css('border-bottom', '2px #FF8C8C solid');
                error.name = true;
            }else{
                $name.css('border-bottom', '');
                error.name = false;
            }

            if(($email.val().indexOf('@') == -1) || $email.val().length < 4) {
                $email.css('border-bottom', '2px #FF8C8C solid');
                error.email = true;
            }else{
                $email.css('border-bottom', '');
                error.email = false;
            }
            if($comments.val().length < 4) {
                $comments.css('border-bottom', '2px #FF8C8C solid');
                error.comments = true;
            }else{
                $comments.css('border-bottom', '');
                error.comments = false;
            }
            if(!error.name && !error.comments && !error.email){
                $.ajax({
                    url:"/email.php",
                    method: "POST",
                    data : {
                        name : $name.val(),
                        email: $email.val(),
                        comments: $comments.val()
                    },
                    timeout: 5000,
                    complete : function(data, status){
                        $('#sending').fadeOut(function(){
                            if(status == "success") {
                                $('#sent').fadeIn();
                            }else{
                                $('#retry').fadeIn();
                            }
                        });
                    },
                    beforeSend: function() {
                        $('#retry').fadeOut();
                        form.animate({'margin-left': '200%'}, 300);
                        $('#sending').fadeIn();
                    }
                });
            }
        })
    }($('#contact-form'),$('#form-submit, #retry-button'))
}();


