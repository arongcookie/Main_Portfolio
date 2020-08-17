/* Trigger */
$('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
});

$('section, .menu a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')

});

//  Change CSS with Scroll
$(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
        $('header, .gotoTop').addClass('active');
    } else {
        $('header, .gotoTop').removeClass('active');
    }

});

// slick.js : history
$('.history-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
});

// slick.js :project photo
$('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'

});
