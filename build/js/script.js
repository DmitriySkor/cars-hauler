document.getElementById("sub_menu_link-1").onclick=function(e){e.preventDefault(),document.getElementById("sub_menu_link-ul-1").classList.toggle("active"),document.getElementById("sub_menu_link-ul-2").classList.toggle("active"),document.getElementById("sub_menu_link-ul-3").classList.remove("active")},document.getElementById("sub_menu_link-2").onclick=function(e){e.preventDefault(),document.getElementById("sub_menu_link-ul-1").classList.remove("active"),document.getElementById("sub_menu_link-ul-2").classList.remove("active"),document.getElementById("sub_menu_link-ul-3").classList.toggle("active")},$(document).ready((function(){$(".item").length>=6?$(".carousel-reviews").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:6}}}):$(".carousel-reviews").trigger("destroy.owl.carousel")}));