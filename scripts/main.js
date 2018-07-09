/*Ao inciar chama o método WOW para as animações*/
$(document).ready(function () {


    new WOW().init();
});


/*SmoothScroll*/
$('a[href*="#"]')/*Seleciona todos os links...*/
    /*Menos os modais e os links sem nada*/
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#modalsemeng"]')
    .not('[href="#modalbis"]')
    .not('[href="#maismim"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
    });


/*Animação da barra e do nome do site*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("nav").addClass("changenav");
            $("#logo-nav").addClass("brandi");
        }
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("changenav");
            $("#logo-nav").removeClass("brandi");
        }
    });
});