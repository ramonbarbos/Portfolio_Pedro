$('.owl-carousel').owlCarousel({
    loop:true,
    margin:3,
    nav:false,
    center:true,
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        2000:{
            items:7
        }
    }
})