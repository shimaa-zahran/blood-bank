$(document).ready(function() {
    $(".service-carousel").owlCarousel({
        loop: true,
        rtl: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true



            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })

})
$(function() {
    $("#datepicker").datepicker();
});