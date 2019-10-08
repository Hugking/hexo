// build time:Tue Oct 08 2019 18:29:04 GMT+0800 (GMT+08:00)
$(window).scroll(function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")});$("#rocket").click(function(){$("#rocket").addClass("launch");$("html, body").animate({scrollTop:0},500,function(){$("#rocket").removeClass("show launch")});return false});
//rebuild by neat 