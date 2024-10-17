jQuery(document).ready(function(){
    jQuery('li.dropdown').on({
        mouseenter: function(){
            jQuery(this).find('div').show();
        },
        mouseleave: function(){
            jQuery(this).find('div').hide();
        }
    });
    jQuery('.top-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    jQuery('.slider2').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    jQuery('.bottom-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    jQuery('.slider3').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});