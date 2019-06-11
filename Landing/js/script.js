$(document).ready(function(){

	$(window).scroll(function(){
	   	let scroll = $(this).scrollTop();
	   	if($(window).width() > 990 ){
        $(".jumbotron h1").css({
	   		"transform" : "translate(0,"+scroll/3+"%)"
	   	});
	   	$(".jumbotron a").css({
	   		"transform" : "translate(0,"+scroll+"%)"
	   	});
        }
    });

    console.log($(window).width());
	
});
