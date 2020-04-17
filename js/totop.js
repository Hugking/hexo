// build time:Fri Apr 17 2020 23:25:56 GMT+0800 (GMT+08:00)
$(window).scroll(function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")});$("#rocket").click(function(){$("#rocket").addClass("launch");$("html, body").animate({scrollTop:0},500,function(){$("#rocket").removeClass("show launch")});return false});
//rebuild by neat 