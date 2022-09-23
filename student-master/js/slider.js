const swiper = new Swiper('.description__carousel', {
    grabCursor: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper2 = new Swiper('.reviews-inner', {
    loop: true, 
    grabCursor: true,
    slidesPerView: 4.2,
    centeredSlides: false,
    autoplay: {
        delay: 4000,
    },
});

const swiper3 = new Swiper('.reviews-inner-second', {
    loop: true, 
    grabCursor: true,
    slidesPerView: 4.2,
    centeredSlides: false,
    autoplay: {
        delay: 5000,
    },
});