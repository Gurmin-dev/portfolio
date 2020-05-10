$(document).ready(function(){
	$('.hamburger').click(function(){
			$(this).toggleClass('is-active');
		});

	$("#hamburger-icon").click(function(){
  		$(".menu-list").slideToggle("display");
	});

	 $('.bg-slider-sec').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  speed: 500,
	  cssEase: 'linear',
	  autoplay: true,
	  autoplaySpeed: 3000,
	  pauseOnHover:false,
	  asNavFor: '.bg-slider-nav'
	});

	  $('.bg-slider-nav').slick({
	   slidesToShow: 3,
 		dots: false,
 		arrows:false,
 		asNavFor: '.bg-slider-sec',
 		centerMode: true,
  		focusOnSelect: true,
  		responsive: [{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
		}
		}]
	 });

	   $('.interior-gallery').slick({
	      infinite: true,
	      speed: 300,
	      variableWidth: true
	  });

	   	 $('.video-banner').slick({
	   	  slidesToShow: 1,
	   	  slidesToScroll: 1,
	   	  arrows: false,
	   	  fade: true,
	   	  speed: 500,
	   	  cssEase: 'linear',
	   	  autoplay: false,
	   	  asNavFor: '.video-sel-div'
	   	});

	   	  $('.video-sel-div').slick({
	   	   slidesToShow: 4,
			dots: false,
			arrows:false,
			asNavFor: '.video-banner',
			centerMode: true,
  			focusOnSelect: true,
	   	});

	 $('.feature-flex-wrap').slick({
	   dots: false,
	   slidesToShow: 5,
	   responsive: [
	     {
	       breakpoint: 1360,
	       settings: {
	         slidesToShow: 4,
	         slidesToScroll: 1
	       }
	     },
	     {
	       breakpoint: 1190,
	       settings: {
	         slidesToShow: 3,
	         slidesToScroll: 1
	       }
	     },
	     {
	       breakpoint: 880,
	       settings: {
	         slidesToShow: 2,
	         slidesToScroll: 1
	       }
	     },
	     {
 		     breakpoint: 590,
 		     settings: {
 		     	slidesToShow: 1,
 		      	slidesToScroll: 1
 		     }
 		   }
	   ]
	 });	

	   setInterval(function(){ 
	     $('.show-message').addClass("displayshow")
	   }, 9000);

	 $(".mes-button button").on('click', function(){
	   $(".show-message").addClass("displaynone");
	 });  
});


