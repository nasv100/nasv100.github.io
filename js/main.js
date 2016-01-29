$(document).ready(function() {

	function heightDetect() {
		$(".page-header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".page-header__content").animated("fadeInLeft", "fadeOutLeft");

	$('#countdown').timeTo({
    timeTo: new Date(new Date('Jan 29 2016 06:00:00 GMT+0300 (RTZ 2 (зима))')),
    lang: "ru",
    theme: "black",
    displayCaptions: true,
    fontSize: 60,
    captionSize: 14
});

	$(".btn--order").click( function() {
		$(".call").toggleClass("show").animated("fadeIn");
	});

	$(".btn--close").click( function() {
		$(".call").toggleClass("show");
	});

	$(".btn--menu").click( function() {
		$(".menu").toggleClass("menu-hidden");
		if($(".menu").hasClass("menu-hidden")){
			$(".page-header__content").css("padding-top", "30px");
		} else {
			$(".page-header__content").css("padding-top", "90px");
		}
	});

	$(".menu ul a").mPageScroll2id();
});

$(window).load(function() {

	$(".loader").delay(400).fadeOut("slow");

}); 