//panel
$(document).ready(function(){
    var btn = '.menu';
    var panel = '.panel';
    var bg = '.panel_bg';
    var main = '.main_nav';
    var sub = '.sub_nav';
    
    $(btn).click(function(e){
        e.preventDefault(); 
        $(panel).addClass('active');
        $(bg).stop().fadeIn(100);
        $('html, body').addClass('active');
    });
    
    $(bg).click(function(){
        $(panel).removeClass('active');
        $(this).stop().delay(500).fadeOut(100,function(){ 
            $(main).removeClass('active');
            $(sub).slideUp(0);
        }); 
        $('html, body').removeClass('active');
        $('.search_box').fadeOut('fast');
    });
    
    $(main).click(function(e){
        e.preventDefault();
        var has = $(this).hasClass('active');

        if(has){ 
            $(this).removeClass('active'); 
            $(this).next().stop().slideUp('fast');
        }else{
            $(main).removeClass('active'); 
            $(this).addClass('active'); 

            $(sub).stop().slideUp('fast'); 
            $(this).next().stop().slideDown('fast'); 
        }
    });
});

//top_btn
$(document).ready(function(){
    var btn = '.top_btn a';
    var speed = 1200;
    var easing = 'easeOutQuart';
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > 80){
            $(btn).parent().stop().fadeIn(400);
        }else{
            $(btn).parent().stop().fadeOut(400);
        }
    });
    
    $(btn).click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        },speed,easing);
    });
});
