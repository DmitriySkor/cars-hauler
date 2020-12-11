$(document).ready(function () {
// sticky menu Появление при скролле
    $(window).scroll(function () {
        let height = $(window).scrollTop();

        /*Если сделали скролл на 150px задаём новый класс для header*/
        if (height > 150) {
            $('#sticky-menu').addClass('sticky-fixed');
        } else {
            /*Если меньше 150px удаляем класс для header*/
            $('#sticky-menu').removeClass('sticky-fixed');
        }
    });

// Добавить клас попапа modal-on
    $(".menu__text ul li ul li:last-child a").attr(
        {
            "class": "modal-on"
        }
    );

// Открытия модального окна атрибуты класа
    $(".modal-on").attr(
        {
            "data-toggle": "modal",
            "data-target": "#modal"
        }
    );
});

window.onload = function () {
// Выпадающее меню
    document.getElementById("btn-menu-open").onclick = function (e) {
        e.preventDefault();
        document.querySelector("body").classList.toggle("fix")
        if (document.getElementById("header_contain")) {
            document.getElementById("header_contain").classList.toggle("fixed")
        } else {
            return false;
        }

        document.getElementById("btn-menu-open").classList.toggle("active")
        document.getElementById("mobile-menu").classList.toggle("active")
    }


    if (document.getElementById("sub_menu_link-1")) {
        document.getElementById("sub_menu_link-1").onclick = function (e) {
            e.preventDefault();
        }
    } else {
        return false
    }


// Первый пункт
    document.getElementById("sub_menu_link-1").parentNode.onmouseover = function (e) {
        e.preventDefault();
        document.getElementById("sub_menu_link-ul-1").classList.add("active")
        document.getElementById("sub_menu_link-ul-2").classList.remove("active")
        document.getElementById("sub_menu_link-ul-3").classList.remove("active")
    }

    document.getElementById("sub_menu_link-1").parentNode.onmouseout = function (e) {
        e.preventDefault();
        document.getElementById("sub_menu_link-ul-1").classList.remove("active")
        document.getElementById("sub_menu_link-ul-2").classList.remove("active")
        document.getElementById("sub_menu_link-ul-3").classList.remove("active")
    }


// Второй пункт
    document.getElementById("sub_menu_link-2").onclick = function (e) {
        e.preventDefault();
    }

    document.getElementById("sub_menu_link-2").parentNode.onmouseover = function (e) {
        e.preventDefault();
        document.getElementById("sub_menu_link-ul-1").classList.remove("active");
        document.getElementById("sub_menu_link-ul-2").classList.add("active");
        document.getElementById("sub_menu_link-ul-3").classList.remove("active");
    }

    document.getElementById("sub_menu_link-2").parentNode.onmouseout = function (e) {
        e.preventDefault();
        document.getElementById("sub_menu_link-ul-1").classList.remove("active");
        document.getElementById("sub_menu_link-ul-2").classList.remove("active");
        document.getElementById("sub_menu_link-ul-3").classList.remove("active");
    }


// Третий пункт
    document.getElementById("sub_menu_link-3").onclick = function (e) {
        e.preventDefault();
    }

    document.getElementById("sub_menu_link-3").parentNode.onmouseover = function (e) {
        e.preventDefault();
        document.getElementById("sub_menu_link-ul-1").classList.remove("active");
        document.getElementById("sub_menu_link-ul-2").classList.remove("active");
        document.getElementById("sub_menu_link-ul-3").classList.add("active");
    }

    document.getElementById("sub_menu_link-3").parentNode.onmouseout = function (e) {
        e.preventDefault();
        document.getElementById("sub_menu_link-ul-1").classList.remove("active");
        document.getElementById("sub_menu_link-ul-2").classList.remove("active");
        document.getElementById("sub_menu_link-ul-3").classList.remove("active");
    }


// Мобильное меню
    document.getElementById("m-sub_menu_link-1").onclick = function (e) {
        e.preventDefault();
        document.getElementById("m-sub_menu_link-ul-1").classList.toggle("active");
        document.getElementById("m-sub_menu_link-ul-2").classList.remove("active");
        document.getElementById("m-sub_menu_link-ul-3").classList.remove("active");

        document.getElementById("m-sub_menu_link-1").classList.toggle("active");
        document.getElementById("m-sub_menu_link-2").classList.remove("active");
        document.getElementById("m-sub_menu_link-2").classList.remove("active");
    }

    document.getElementById("m-sub_menu_link-2").onclick = function (e) {
        e.preventDefault();
        document.getElementById("m-sub_menu_link-ul-1").classList.remove("active");
        document.getElementById("m-sub_menu_link-ul-2").classList.toggle("active");
        document.getElementById("m-sub_menu_link-ul-3").classList.remove("active");

        document.getElementById("m-sub_menu_link-1").classList.remove("active");
        document.getElementById("m-sub_menu_link-2").classList.toggle("active");
        document.getElementById("m-sub_menu_link-3").classList.remove("active");
    }

    document.getElementById("m-sub_menu_link-3").onclick = function (e) {
        e.preventDefault();
        document.getElementById("m-sub_menu_link-ul-1").classList.remove("active");
        document.getElementById("m-sub_menu_link-ul-2").classList.remove("active");
        document.getElementById("m-sub_menu_link-ul-3").classList.toggle("active");

        document.getElementById("m-sub_menu_link-1").classList.remove("active");
        document.getElementById("m-sub_menu_link-2").classList.remove("active");
        document.getElementById("m-sub_menu_link-3").classList.toggle("active");
    }


// sticky menu Первый пункт
    document.getElementById("sticky_menu_link-1").parentNode.onmouseover = function (e) {
        e.preventDefault();
        document.getElementById("sticky_menu_link-ul-1").classList.add("active")
        document.getElementById("sticky_menu_link-ul-2").classList.remove("active")
        document.getElementById("sticky_menu_link-ul-3").classList.remove("active")
    }

    document.getElementById("sticky_menu_link-1").parentNode.onmouseout = function (e) {
        e.preventDefault();
        document.getElementById("sticky_menu_link-ul-1").classList.remove("active")
        document.getElementById("sticky_menu_link-ul-2").classList.remove("active")
        document.getElementById("sticky_menu_link-ul-3").classList.remove("active")
    }

// sticky menu Второй пункт
    document.getElementById("sticky_menu_link-2").onclick = function (e) {
        e.preventDefault();
    }

    document.getElementById("sticky_menu_link-2").parentNode.onmouseover = function (e) {
        e.preventDefault();
        document.getElementById("sticky_menu_link-ul-1").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-2").classList.add("active");
        document.getElementById("sticky_menu_link-ul-3").classList.remove("active");
    }

    document.getElementById("sticky_menu_link-2").parentNode.onmouseout = function (e) {
        e.preventDefault();
        document.getElementById("sticky_menu_link-ul-1").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-2").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-3").classList.remove("active");
    }

// sticky menu Третий пункт
    document.getElementById("sticky_menu_link-3").onclick = function (e) {
        e.preventDefault();
    }

    document.getElementById("sticky_menu_link-3").parentNode.onmouseover = function (e) {
        e.preventDefault();
        document.getElementById("sticky_menu_link-ul-1").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-2").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-3").classList.add("active");
    }

    document.getElementById("sticky_menu_link-3").parentNode.onmouseout = function (e) {
        e.preventDefault();
        document.getElementById("sticky_menu_link-ul-1").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-2").classList.remove("active");
        document.getElementById("sticky_menu_link-ul-3").classList.remove("active");
    }
};

$(document).ready(function () {
    // Инициализация owlCarousel 1
    let elems = $('.item').length;
    if (elems >= 5) {
        $(".carousel-reviews").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        });
    } else {
        $('.carousel-reviews').trigger('destroy.owl.carousel');
    }

    // Инициализация owlCarousel 2
    $(".carousel-reviews2").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // Инициализация owlCarousel 3
    $(".carousel-types-of-delivery").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<img src='img/prev.svg' alt='img'>", "<img src='img/next.svg' alt='img'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // Отлипающий ус
    if (document.querySelector(".carousel-types-of-delivery")) {
        let navigationWidth = document.querySelector(".carousel-types-of-delivery").getElementsByClassName('owl-nav')[0];
        let screenWidth = document.body.clientWidth;
        navigationWidth.style.width = screenWidth + "px";
        $(window).resize(function () {
            let screenWidth = document.body.clientWidth;
            navigationWidth.style.width = screenWidth + "px";
        });
    } else {
        return false;
    }

    // Scroll to Top
    let btn = $('#backtotop');
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });


    // Initialization tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});