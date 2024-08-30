
$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center:true,
    nav:true,
    navText:[
        '<i class="bi bi-arrow-left-circle"></i>',

        '<i class="bi bi-arrow-right-circle"></i>',
    ],

    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
            
        },
        1000:{
            items:3,
           
        }
    }
})

})