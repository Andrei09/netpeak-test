$(document).ready(function(){
    var header = $('#site-header'),
        nav = $(".site-nav"),
        bar = $('.menu-icon');

    $(window).scroll(function() {
        if($(window).scrollTop() > 1){
            header.css('background-color','#6572ee');
        } else{
            console.log("Up");
            header.css('background-color','transparent');
        }
    });
    $('a').click( function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 110;
        $('body,html').animate({scrollTop: top}, 1500);
        nav.removeClass('open-menu');
    });
    bar.click(function() {
        nav.toggleClass('open-menu');
    });

});
