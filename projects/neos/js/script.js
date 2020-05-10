$(document).ready(function(){
	$('.hamburger').click(function(){
			$(this).toggleClass('is-active');
		});

	$("#hamburger-icon").click(function(){
  		$(".menu-list").slideToggle("display");
	});

	$("#drop-down-icon").click(function(){
  		$(".drop-down-ul").toggleClass("display");
	});

	$('.banner').slick({
		dots:false,
		speed: 500,
  		fade: true,
  		cssEase: 'linear',
  		responsive: [
  		   {
  		     breakpoint: 800,
  		     settings: {
  		       autoplay: true,
  		       autoplaySpeed: 2000
  		     }
  		   }
  		 ]
	});

	$('.products-flex-wrap').slick({
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		   {
		     breakpoint: 1140,
		     settings: {
		     	slidesToShow: 2   
		     }
		   },
		   	{
  		     breakpoint: 790,
  		     settings: {
  		       slidesToShow: 1
  		     }
  		   },
   		   	{
 		     breakpoint: 630,
 		     settings: {
 		     	slidesToShow: 1,
 		       autoplay: true,
 		       autoplaySpeed: 2000
 		     }
 		   }
		 ]
	});

	$('.testimonials-wrap').slick({
		dots:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		   {
		     breakpoint: 950,
		     settings: {
		       autoplay: true,
		       autoplaySpeed: 2000
		     }
		   }
		 ]
	});

	var check = true;

	$(window).scroll(function () {

	var wScroll = $(this).scrollTop();

	if (wScroll > $('.temp-rolling').offset().top - ($(window).height() / 1.2) && check) {

	        $('.value1').animateNumber({ 
	            number: 12340
	        },3000);

	        $('.value2').animateNumber({ 
	            number: 453
	        },3000);
	        check = false;
	    }
	});

	  setInterval(function(){ 
	    $('.show-message').addClass("displayshow")
	  }, 9000);

	$(".mes-button button").on('click', function(){
	  $(".show-message").addClass("displaynone");
	});
});


