$(function(){
    if ($('script[src="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"]').length > 0) {

        $('.photo-gallery').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,

            variableWidth: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }

    var condition1 = window.location.href.indexOf("/motion-graphics/") > -1;
    var condition2 = window.location.href.indexOf("/print/") > -1;
    var condition3 = window.location.href.indexOf("/3d/") > -1;

    if(condition1 || condition2 || condition3) {
        $('body').addClass('bb-present').prepend('<div class="back-button"><a onclick="window.history.back()"><span>&laquo;</span> Back</a></div>');
}
 });


