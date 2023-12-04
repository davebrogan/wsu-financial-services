//raw jQuery function

function scroll_to(div){
	$('html, body').animate({
		scrollTop: $("mydiv").offset().top
	},1000);
}

// auto-scroll to div example on click

$("#div-to-click-id").click(function (){
	$('html, body').animate({
		scrollTop: $("#div-to-scroll-to-id").offset().top
	},1000);
});