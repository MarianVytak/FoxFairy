$(document).ready(function () {

    $('.home-4__block_img').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true
    });

    const boxLink = $('.home-4__block_item');
    const boxContent = $('.home-4__block_img');
    boxLink.on('click', function (e) {
        e.preventDefault();
        let thisBoxContent = $(this).attr('data-target');
        boxContent.removeClass('active');
        $(thisBoxContent).addClass('active');
    });

});