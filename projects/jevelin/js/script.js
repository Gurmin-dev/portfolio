$(document).ready(function(){

	$("#open").on('click', function(){
		$(".hamb").addClass("display");
    $(".hamb").removeClass("display-back");
	});

	// $("#open").on('click', function(){
	// 	$(".hamb").removeClass("display-back");
	// });

	$("#close").on('click', function(){
		$(".hamb").removeClass("display");
    $(".hamb").addClass("display-back");
	});

	// $("#close").on('click', function(){
	// 	$(".hamb").addClass("display-back");
	// });

  $(window).on('scroll', function() {
    if($(window).scrollTop()){
      $('.navbar').addClass('magic');
    }else {
      $('.navbar').removeClass('magic');   
    };   
  });

    setInterval(function(){ 
      $('.show-message').addClass("displayshow")
    }, 9000);

  $(".mes-button button").on('click', function(){
    $(".show-message").addClass("displaynone");
  });

   $('.carousel1').slick({
     dots:true,
     slidesToShow:3,
     slidesToScroll:1,
     autoplay:true,
     autoplaySpeed:1500,
     responsive: [
       {
         breakpoint: 1250,
         settings: {
          slidesToShow:2,
          slidesToScroll:1
         }
       },
       {
         breakpoint: 875,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });   

});

