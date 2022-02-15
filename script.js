$('.slider').slick({
    centerMode: true,
    centerPadding: '20%',
    infinite: true,
    slideToShow: 3,
    slideToScroll: 1,
    arrows: true,
    
    
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                infinite: true,
                slideToShow: 3,
                slideToScroll: 1,
                dots: true,
                adaptiveHeight: true
                
            }
        }
    ]
});
