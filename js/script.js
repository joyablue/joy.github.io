$(document).ready(function () {
    // 메뉴
    $('.menu').on('click', function (e) {
        $('.menu_bg').show();
        $('.sidebar_menu').show().animate({
            right: 0
        });
        e.preventDefault();
    });

    // 메뉴닫기버튼
    $('.close_btn>a').on('click', function (e) {
        e.preventDefault();
        $('.menu_bg').hide();
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
        }, function () {
            $('.sidebar_menu').hide();
        });
    });

    // 퍼블리싱 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        speed: 1000,
        allowTouchMove: true,
        effect: 'fade',
        fadeEffect: {
        	crossFade: false,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-prev-btn',
            nextEl: '.sw-next-btn',
        }
    })

    sw_visual.on('transitionStart', function() {
        $(".pb-slide .banner-box-wrap .banner-box").hide().eq(sw_visual.realIndex).show()
        // console.log('now index :::', content_right.realIndex);
    });

    // 디자인 슬라이드
    let sw_visual_2 = new Swiper('.sw-visual-2', {
        // direction: 'vertical',
        loop: true,
        speed: 1000,
        allowTouchMove: true,
        // effect: 'fade',
        // fadeEffect: {
        // 	crossFade: false,
        // },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-prev-btn',
            nextEl: '.sw-next-btn',
        },
        breakpoints: { // 화면의 넓이가 1410px 이상일 때
            1410: {
                direction: 'vertical',
                speed: 1000,
                allowTouchMove: true,
                loop: true,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    prevEl: '.sw-prev-btn',
                    nextEl: '.sw-next-btn',
                },
            },
        }
    })

    sw_visual_2.on('transitionStart', function() {
        $(".dg-slide .banner-box-wrap .banner-box").hide().eq(sw_visual_2.realIndex).show()
        // console.log('now index :::', content_right.realIndex);
    });
    $(".pic-grid").imagesLoaded( function() {
        $(".pic-grid").isotope({
            itemSelector: ".item"
        })
    })
    $(".pic-btn li").eq(0).addClass("on");

    $(".pic-btn li").click(function (e) {
        e.preventDefault();
        let i = $(this).index();
        $(".pic-btn li").removeClass("on").eq(i).addClass("on");
        let selector = $(this).attr("data-filter");
        $(".pic-grid").isotope({
            filter: selector
        })
    });
    // 사진 클릭시 확대
    $('.pic-grid > div').click(function(){
        var i = $(this).index();
        $('.modal').fadeTo(500,1);
        $('.list li').eq(i).show();

        $('html, body').css({'overflow': 'hidden'}); 
        // 모달팝업 중 html,body의 scroll을 hidden시킴
        $('html, body').on('scroll touchmove mousewheel', function(e) { 
        // 터치무브와 마우스휠 스크롤 방지
            e.preventDefault();
            e.stopPropagation();

            return false;
        });
    });
    $('.modal').click(function(){
        $('html, body').css({'overflow': 'auto'}); 
        //scroll hidden 해제
        $('html, body').off('scroll touchmove mousewheel');
        // 터치무브 및 마우스휠 스크롤 가능
        
        $(this).fadeOut();
        $(this).fadeTo(10,1);
        $('.list li').hide();
    });
});

// 각 요소별 AOS 기능 사용
window.addEventListener('load', function (e) {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

})