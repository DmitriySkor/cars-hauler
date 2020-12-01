// Выпадающее меню
document.getElementById("btn-menu-open").onclick = function (e) {
    e.preventDefault();
    document.getElementById("btn-menu-open").classList.toggle("active")
    document.getElementById("mobile-menu").classList.toggle("active")
}

document.getElementById("sub_menu_link-1").onclick = function (e) {
    e.preventDefault();
    document.getElementById("sub_menu_link-ul-1").classList.toggle("active")
    document.getElementById("sub_menu_link-ul-2").classList.toggle("active")
    document.getElementById("sub_menu_link-ul-3").classList.remove("active")
}

document.getElementById("sub_menu_link-2").onclick = function (e) {
    e.preventDefault();
    document.getElementById("sub_menu_link-ul-1").classList.remove("active");
    document.getElementById("sub_menu_link-ul-2").classList.remove("active");
    document.getElementById("sub_menu_link-ul-3").classList.toggle("active");
}

document.getElementById("m-sub_menu_link-1").onclick = function (e) {
    e.preventDefault();
    document.getElementById("m-sub_menu_link-1").classList.toggle("active");
    document.getElementById("m-sub_menu_link-ul-1").classList.toggle("active");
    document.getElementById("m-sub_menu_link-ul-2").classList.toggle("active");
    document.getElementById("m-sub_menu_link-ul-3").classList.remove("active");
    document.getElementById("m-sub_menu_link-2").classList.remove("active");
}

document.getElementById("m-sub_menu_link-2").onclick = function (e) {
    e.preventDefault();
    document.getElementById("m-sub_menu_link-2").classList.toggle("active");
    document.getElementById("m-sub_menu_link-ul-1").classList.remove("active");
    document.getElementById("m-sub_menu_link-ul-2").classList.remove("active");
    document.getElementById("m-sub_menu_link-ul-3").classList.toggle("active");
    document.getElementById("m-sub_menu_link-1").classList.remove("active");
}


$(document).ready(function () {
    // Multi-step form
    let steps = $("form").children(".step"); // находим все шаги формы
    $(steps[0]).show(); // показываем первый шаг
    let current_step = 0; // задаем текущий шаг
    $("a.next").click(function () {	// Событие клика на ссылку "Следующий шаг"
        if (current_step == steps.length - 2) { // проверяем, будет ли следующий шаг последним
            $(this).hide(); // скрываем ссылку "Следующий шаг"
            $("form input[type=submit]").show(); // показываем кнопку "Регистрация"
        }
        $("a.back").show(); // показываем ссылку "Назад"
        current_step++; // увеличиваем счетчик текущего слайда
        changeStep(current_step); // меняем шаг
    });

    $("a.back").click(function () {	// Событие клика на маленькое изображение
        if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
            $(this).hide(); // скрываем ссылку "Назад"
        }
        $("form input[type=submit]").hide(); // скрываем кнопку "Регистрация"
        $("a.next").show(); // показываем ссылку "Следующий шаг"
        current_step--; // уменьшаем счетчик текущего слайда
        changeStep(current_step);// меняем шаг
    });

    function changeStep(i) { // функция смены шага
        $(steps).hide(); // скрываем все шаги
        $(steps[i]).show(); // показываем текущий
    }

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

    let screenWidth = document.querySelector("body").clientWidth;

    let navigationWidth = document.querySelector(".carousel-types-of-delivery").getElementsByClassName('owl-nav')[0];
    navigationWidth.style.width = screenWidth + "px";
    window.addEventListener('resize', function () {
        navigationWidth.style.width = screenWidth + "px";
    });

    let itemWidth = document.querySelector(".carousel-types-of-delivery").getElementsByClassName('owl-item');
    //console.log(itemWidth);


    // let s1 = document.getElementById("multiform").getElementsByClassName('step')[0];
    // console.log(s1);
    //
    // let s2 = document.getElementById("multiform").getElementsByClassName('step')[1];
    // console.log(s2);
    //
    // let s3 = document.getElementById("multiform").getElementsByClassName('step')[2];
    // console.log(s3);
    //
    // let s4 = document.getElementById("multiform").getElementsByClassName('step')[3];
    // console.log(s4);


    // $(".l1-1").click(function (e) {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(123);
    //     s1.style.display = "block";
    //     s2.style.display = "none";
    //     s3.style.display = "none";
    //     s4.style.display = "none";
    // });
    //
    // $(".l1-2").click(function () {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(456);
    //     s1.style.display = "none";
    //     s2.style.display = "block";
    //     s3.style.display = "none";
    //     s4.style.display = "none";
    // });
    //
    // $(".l1-3").click(function () {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(789);
    //     s1.style.display = "none";
    //     s2.style.display = "none";
    //     s3.style.display = "block";
    //     s4.style.display = "none";
    // });
    //
    // $(".l2-1").click(function (e) {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(123);
    //     s1.style.display = "block";
    //     s2.style.display = "none";
    //     s3.style.display = "none";
    //     s4.style.display = "none";
    // });
    //
    // $(".l2-2").click(function () {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(456);
    //     s1.style.display = "none";
    //     s2.style.display = "block";
    //     s3.style.display = "none";
    //     s4.style.display = "none";
    // });
    //
    // $(".l2-3").click(function () {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(789);
    //     s1.style.display = "none";
    //     s2.style.display = "none";
    //     s3.style.display = "block";
    //     s4.style.display = "none";
    // });
    //
    // $(".l3-1").click(function (e) {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(123);
    //     s1.style.display = "block";
    //     s2.style.display = "none";
    //     s3.style.display = "none";
    //     s4.style.display = "none";
    // });
    //
    // $(".l3-2").click(function () {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(456);
    //     s1.style.display = "none";
    //     s2.style.display = "block";
    //     s3.style.display = "none";
    //     s4.style.display = "none";
    // });
    //
    // $(".l3-3").click(function () {	// Событие клика на маленькое изображение
    //     e.preventDefault();
    //     console.log(789);
    //     s1.style.display = "none";
    //     s2.style.display = "none";
    //     s3.style.display = "block";
    //     s4.style.display = "none";
    // });


    $("#datepicker").datepicker({
        minDate: 0
    });


// Инициализация jQueryFormStyler
// Для активации плагина примените метод .styler к тегам, которые хотите стилизовать
// флажок <input type="checkbox">;
// переключатель <input type="radio">;
// поле для выбора файла <input type="file">.
// поле для ввода чисел <input type="number">.
// раскрывающийся список <select>;
//     (function ($) {
//         $(function () {
//             $('input, select').styler();
//         });
//     })(jQuery);

// Инициализация Fancybox
//     $().fancybox({
//         selector: '[data-fancybox="gallery"]',
//         loop: true
//     });

//Инициализация маски ввода телефона
//     jQuery(function ($) {
//         $(".masked-input").mask("+38 ( 999 ) 999-99-99");
//     });

});


jQuery(document).ready(function () {
    var btn = $('#backtotop');
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});