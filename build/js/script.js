document.getElementById("sub_menu_link-1").onclick=function(e){e.preventDefault(),document.getElementById("sub_menu_link-ul-1").classList.toggle("active"),document.getElementById("sub_menu_link-ul-2").classList.toggle("active"),document.getElementById("sub_menu_link-ul-3").classList.remove("active")},document.getElementById("sub_menu_link-2").onclick=function(e){e.preventDefault(),document.getElementById("sub_menu_link-ul-1").classList.remove("active"),document.getElementById("sub_menu_link-ul-2").classList.remove("active"),document.getElementById("sub_menu_link-ul-3").classList.toggle("active")},$(document).ready((function(){$(".item").length>=5?$(".carousel-reviews").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:6}}}):$(".carousel-reviews").trigger("destroy.owl.carousel"),$(".carousel-reviews2").owlCarousel({loop:!0,margin:30,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:6}}});let e=$("form").children(".step");$(e[0]).show();let t=0;function n(t){$(e).hide(),$(e[t]).show()}$("a.next").click((function(){t==e.length-2&&($(this).hide(),$("form input[type=submit]").show()),$("a.back").show(),t++,n(t)})),$("a.back").click((function(){1==t&&$(this).hide(),$("form input[type=submit]").hide(),$("a.next").show(),t--,n(t)})),$("#datepicker").datepicker({minDate:0})}));