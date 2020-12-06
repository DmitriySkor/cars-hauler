let parent = document.querySelector('#multiform');
let child = parent.querySelectorAll('.step');


function validate_one_step() {

    child[0].classList.add("active");

    let inputDeliveryFrom = document.getElementById("multiform_from");
    let inputDeliveryTo = document.getElementById("multiform_to");
    let inputDatepicker = document.getElementById("datepicker");
    let multiformBtnOne = document.getElementById("multiform-btn-one");


    inputDeliveryFrom.onchange = function () {
        if (!inputDeliveryFrom.value) {
            return false;
        } else if (inputDeliveryFrom.value && inputDeliveryTo.value && inputDatepicker.value) {
            multiformBtnOne.classList.remove("disabled");
        }
    }


    inputDeliveryFrom.onchange = function () {
        if (!inputDeliveryTo.value) {
            return false;
        } else if (inputDeliveryFrom.value && inputDeliveryTo.value && inputDatepicker.value) {
            multiformBtnOne.classList.remove("disabled");
        }
    }

    inputDatepicker.onchange = function () {
        if (!inputDatepicker.value) {
            return false;
        } else if (inputDeliveryFrom.value && inputDeliveryTo.value && inputDatepicker.value) {
            multiformBtnOne.classList.remove("disabled");
        }
    }



    multiformBtnOne.onclick = function (){
        child[0].classList.remove("active");
        child[1].classList.add("active");
    }

    return true;
}

validate_one_step();

document.getElementById("step_2_return_1").onclick = function (){
    child[0].classList.add("active");
    child[1].classList.remove("active");
}

function validate_two_step(){
    let carYears = document.getElementById("car-years");
    let carMakes = document.getElementById("car-makes");
    let carModels = document.getElementById("car-models");
    let multiformBtnTwo = document.getElementById("multiform-btn-two");
    let step_2_return_1 = document.getElementById("step_2_return_1");



    console.log(carYears);
    console.log(carMakes);
    console.log(carModels);
    console.log(multiformBtnTwo);


    carYears.onchange = function () {
        if (carYears.value === '') {
            return false;
        } else if (carYears.value && carMakes.value && carModels.value) {
            step_2_return_1.classList.add("active");
            multiformBtnTwo.classList.remove("disabled");
        }
    }

    multiformBtnTwo.onclick = function (){
        child[1].classList.remove("active");
        child[2].classList.add("active");
    }


}
validate_two_step();


$(".menu__text ul li ul li:last-child a").attr(
    {
        "class": "modal-on"
    }
);

$(".modal-on").attr(
    {
        "data-toggle": "modal",
        "data-target": "#modal"
    }
);

// Выпадающее меню
document.getElementById("btn-menu-open").onclick = function (e) {

    document.querySelector("body").classList.toggle("fix")
    document.getElementById("header_contain").classList.toggle("fixed")
    document.getElementById("btn-menu-open").classList.toggle("active")
    document.getElementById("mobile-menu").classList.toggle("active")
}

document.getElementById("sub_menu_link-1").onclick = function (e) {
    e.preventDefault();
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

$(document).ready(function () {
    // Multi-step form
    // let steps = $("form").children(".step"); // находим все шаги формы
    // $(steps[0]).show(); // показываем первый шаг
    // let current_step = 0; // задаем текущий шаг
    // $("a.next").click(function () {	// Событие клика на ссылку "Следующий шаг"
    //     if (current_step == steps.length - 2) { // проверяем, будет ли следующий шаг последним
    //         $(this).hide(); // скрываем ссылку "Следующий шаг"
    //         // $("form input[type=submit]").show(); // показываем кнопку "Регистрация"
    //     }
    //     $("a.back").show(); // показываем ссылку "Назад"
    //     current_step++; // увеличиваем счетчик текущего слайда
    //     changeStep(current_step); // меняем шаг
    // });
    //
    // $("a.back").click(function () {	// Событие клика на маленькое изображение
    //     if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
    //         $(this).hide(); // скрываем ссылку "Назад"
    //     }
    //     $("form input[type=submit]").hide(); // скрываем кнопку "Регистрация"
    //     $("a.next").show(); // показываем ссылку "Следующий шаг"
    //     current_step--; // уменьшаем счетчик текущего слайда
    //     changeStep(current_step);// меняем шаг
    // });
    //
    // function changeStep(i) { // функция смены шага
    //     $(steps).hide(); // скрываем все шаги
    //     $(steps[i]).show(); // показываем текущий
    // }

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


$(document).ready(function () {
    let btn = $('#backtotop');
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});

$(document).ready(
    function () {
        //Create a variable for the CarQuery object.  You can call it whatever you like.
        let carquery = new CarQuery();

        //Run the carquery init function to get things started:
        carquery.init();

        //Optionally, you can pre-select a vehicle by passing year / make / model / trim to the init function:
        //carquery.init('2000', 'dodge', 'Viper', 11636);

        //Optional: Pass sold_in_us:true to the setFilters method to show only US models.
        carquery.setFilters({sold_in_us: true});

        //Optional: initialize the year, make, model, and trim drop downs by providing their element IDs
        carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims');

        //Optional: set the onclick event for a button to show car data.
        $('#cq-show-data').click(function () {
            carquery.populateCarData('car-model-data');
        });

        //Optional: initialize the make, model, trim lists by providing their element IDs.
        carquery.initMakeModelTrimList('make-list', 'model-list', 'trim-list', 'trim-data-list');

        //Optional: set minimum and/or maximum year options.
        carquery.year_select_min = 1941;
        carquery.year_select_max = 2021;

        //Optional: initialize search interface elements.
        //The IDs provided below are the IDs of the text and select inputs that will be used to set the search criteria.
        //All values are optional, and will be set to the default values provided below if not specified.
        let searchArgs =
            ({
                body_id: "cq-body"
                , default_search_text: "Keyword Search"
                , doors_id: "cq-doors"
                , drive_id: "cq-drive"
                , engine_position_id: "cq-engine-position"
                , engine_type_id: "cq-engine-type"
                , fuel_type_id: "cq-fuel-type"
                , min_cylinders_id: "cq-min-cylinders"
                , min_mpg_hwy_id: "cq-min-mpg-hwy"
                , min_power_id: "cq-min-power"
                , min_top_speed_id: "cq-min-top-speed"
                , min_torque_id: "cq-min-torque"
                , min_weight_id: "cq-min-weight"
                , min_year_id: "cq-min-year"
                , max_cylinders_id: "cq-max-cylinders"
                , max_mpg_hwy_id: "cq-max-mpg-hwy"
                , max_power_id: "cq-max-power"
                , max_top_speed_id: "cq-max-top-speed"
                , max_weight_id: "cq-max-weight"
                , max_year_id: "cq-max-year"
                , search_controls_id: "cq-search-controls"
                , search_input_id: "cq-search-input"
                , search_results_id: "cq-search-results"
                , search_result_id: "cq-search-result"
                , seats_id: "cq-seats"
                , sold_in_us_id: "cq-sold-in-us"
            });
        carquery.initSearchInterface(searchArgs);

        //If creating a search interface, set onclick event for the search button.  Make sure the ID used matches your search button ID.
        $('#cq-search-btn').click(function () {
            carquery.search();
        });
    });


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// let inputDeliveryFrom = document.getElementById("multiform_from");
// let inputDeliveryTo = document.getElementById("multiform_to");
// let inputDatepicker = document.getElementById("datepicker");
//
//
// inputDeliveryFrom.onchange = function () {
//     console.log(inputDeliveryFrom.value)
// }
//
// inputDeliveryTo.onchange = function () {
//     console.log(inputDeliveryTo.value)
// }
//
// inputDatepicker.onchange = function () {
//     console.log(inputDatepicker.value)
// }