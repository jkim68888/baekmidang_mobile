/*popup*/
$(document).ready(function(){
    
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var todayBox = '#close_today';
    var closeBox = '#close';
   
    $(todayBox).click(function(e){
        e.preventDefault; 
     
        setCookie('exCookie','done',1); 
        
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    
    $(closeBox).click(function(e){
        e.preventDefault; 
     
        setCookie('exCookie','done',-1); 
        
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
    
});

/*main*/
$(document).ready(function(){
    var swiper = new Swiper('main .swiper-container', {
        pagination: {
            el: 'main .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
});

/*icecream & bakery*/
$(document).ready(function(){
    var swiper = new Swiper('.icecream .swiper-container, .bakery .swiper-container', {
        slidesPerView: 3,
        loop: true,
    });
});

/*notice & event*/
$(document).ready(function(){
    var swiper = new Swiper('.notice_event .swiper-container', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        direction: 'vertical',
    });
});

