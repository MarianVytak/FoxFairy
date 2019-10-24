'use strict';

const anchorLink = $('.js-anchor-link');
anchorLink.on('click', function (e) {
    e.preventDefault();
    let thisAnchorLink = $(this).attr('data-target'),
        anchorBlock = $(thisAnchorLink).offset().top;
    $('html, body').animate({
        scrollTop: anchorBlock
    }, 2000);
});