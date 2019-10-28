$(document).ready(function () {

    // Desktop
    const boxLink = $('.home-4__block_item');
    const boxContent = $('.home-4__block_img');

    boxContent.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true
    });

    boxLink.on('click', function (e) {
        e.preventDefault();
        let thisBoxContent = $(this).attr('data-target');
        boxContent.removeClass('active');
        $(thisBoxContent).addClass('active');
    });



    // Mobile and Tablet
    const boxLinkMobile = $('.home-4__mobile_item');
    const boxContentMobile = $('.home-4__mobile_img');
    const boxNameMobile = $('.home-4__mobile_name');

    boxContentMobile.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });

    boxLinkMobile.on('click', function (e) {
        e.preventDefault();
        let thisBoxContentMobile = $(this).attr('data-target');
        boxNameMobile.removeClass('active');
        boxContentMobile.removeClass('active');
        $(thisBoxContentMobile).addClass('active');
        boxLinkMobile.removeClass('active');
        $(this).addClass('active');
    });

});