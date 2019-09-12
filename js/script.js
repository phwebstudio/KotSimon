$(document).ready(function () {
	$("#logo, #main-menu, #feed_back1, #feed_back2").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

$(document).ready(function() {
		$('.menu-trigger').click(function() {
		$('header nav ul').slideToggle(500);
	});
});

$('#products .products-items').slick({
	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	pauseOnHover: false
});

$('.products-mob .products-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	pauseOnHover: false
});

$('.stocks-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnFocus: false,
	pauseOnHover: false,
	dots: true
});

$('#brands .brands-items').slick({
	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnFocus: false,
	pauseOnHover: false
});

$('.brands-mob .brands-items').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnFocus: false,
	pauseOnHover: false
});

lightbox.option({
	'wrapAround': true
})