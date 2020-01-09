$(function() {
    $('#close-nav').on('click', function() {
        $('.list-nav').toggleClass('hide-nav');
        $('.overlay-gray').toggleClass('hide-overlay');
    });
    $('#show-nav').on('click', function() {
        $('.list-nav').toggleClass('hide-nav');
        $('.overlay-gray').toggleClass('hide-overlay');
    });
    $('.overlay-gray').on('click', function() {
        $('.list-nav').removeClass('hide-nav');
        $('.overlay-gray').removeClass('hide-overlay');
    });
})