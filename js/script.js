$(document).ready(function(){
	$(".scroll-down").click(function(){
  		$(".banner").addClass("display");
	});

	$(window).on('scroll', function() {
	  if($(window).scrollTop()){
	    $('.navbar').addClass('magic');
	  }else {
	    $('.navbar').removeClass('magic');   
	  };   
	});

	$('.js-anchor-link').click(function(e){
	  e.preventDefault();
	  var target = $($(this).attr('href'));
	  if(target.length){
	    var scrollTo = target.offset().top;
	    $('body, html').animate({scrollTop: scrollTo+'px'}, 300);
	  }
	});

	$(".scroll-down").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".about-sec").offset().top},
	        'slow');
	});

});


