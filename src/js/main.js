// Выпадающее меню
document.getElementById("sub_menu_link-1").onclick = function (e) {
    e.preventDefault();
    document.getElementById("sub_menu_link-ul-1").classList.toggle("active")
    document.getElementById("sub_menu_link-ul-2").classList.toggle("active")
    document.getElementById("sub_menu_link-ul-3").classList.remove("active")
}

document.getElementById("sub_menu_link-2").onclick = function (e) {
    e.preventDefault();
    document.getElementById("sub_menu_link-ul-1").classList.remove("active")
    document.getElementById("sub_menu_link-ul-2").classList.remove("active")
    document.getElementById("sub_menu_link-ul-3").classList.toggle("active")
}

// Инициализация owlCarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

// Инициализация jQueryFormStyler
// Для активации плагина примените метод .styler к тегам, которые хотите стилизовать
// флажок <input type="checkbox">;
// переключатель <input type="radio">;
// поле для выбора файла <input type="file">.
// поле для ввода чисел <input type="number">.
// раскрывающийся список <select>;
(function ($) {
    $(function () {
        $('input, select').styler();
    });
})(jQuery);

// Инициализация Fancybox
$().fancybox({
    selector: '[data-fancybox="gallery"]',
    loop: true
});

//Инициализация маски ввода телефона
jQuery(function ($) {
    $(".masked-input").mask("+38 ( 999 ) 999-99-99");
});