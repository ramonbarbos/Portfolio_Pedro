$('.owl-carousel').owlCarousel({
    
    margin:3,
    nav:false,
    items:1,
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    animateIn: 'flipInX',
    responsive:{
        400:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        2000:{
            items:7
        }
    }
})