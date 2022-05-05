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
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        2000:{
            items:7
        }
    }
})