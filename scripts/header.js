$(document).ready(function () {

    $('body').find('header .hamburger').on('click', function () {
        $(this).toggleClass('open');
        $('body').find('header .menu-right').toggleClass('open');
    });

    $('body').on('click', function (e) {
        if (!$('body').find('.header').is(e.target) && $('body').find('.header').has(e.target).length === 0) {
            $('body').find('header .hamburger').removeClass('open');
            $('body').find('header .menu-right').removeClass('open');
        }
    });
});