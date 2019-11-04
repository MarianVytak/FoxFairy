$(document).ready(function () {

    const btnSteep = $('.js-btn-steep');
    const steepContent = $('.form-steep');
    btnSteep.on('click', function (e) {
        e.preventDefault();
        steepContent.removeClass('active');
        let steepContentThis = $(this).attr('href');
        $(steepContentThis).addClass('active');
    });

});