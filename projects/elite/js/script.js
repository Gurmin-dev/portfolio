jarallax(document.querySelectorAll('.video'), {
    speed: -0.8,
    videoSrc: 'https://www.youtube.com/watch?v=ab0TSkLe-E0'
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.nav li a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.nav li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


$(function () {
   let container = $('#pagination');
   container.pagination({
       dataSource: [
           {
           		img: "https://colorlib.com/preview/theme/elit/images/person_1.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_2.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_3.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_4.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_1.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_2.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_3.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_1.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_2.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_3.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
       	   {
           		img: "https://colorlib.com/preview/theme/elit/images/person_1.jpg",
           		title: "new photography in forbes.",
           		author:'arthur jain',
           		date: '8 july,2019',
           		text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' 
       	   },
           
       ],
       pageSize: 4,
       callback: function (data, pagination) {
           var dataHtml = `<ul class="row mb-0">`;

           $.each(data, function (index, item) {
               dataHtml += `<li class="col-12 mb-3 mb-sm-4 mb-lg-5 d-flex flex-wrap">
						<div class="col-12 col-sm-5 img pr-0 pr-sm-4 pl-0">
							<div class="bio-bg bio-bg1">
								<img class="img-fluid" src="${item.img}">
							</div>
						</div>
						<div class="col-12 content-bio col-sm-7 d-flex justify-content-center py-2 flex-column h-sm-100 ml-auto ">
							<h2 class="mb-3">
								<a href="" class="text-capitalize text-white">
									${item.title}
								</a>
							</h2>
							<p>posted by <a href="">${item.author}</a> on date <a href="">${item.date}</a></p>
							<p class="cont">
								${item.text}
							</p>
						</div>
					</li>`;
           });

           dataHtml += `</ul>`;

           $("#pag-container").html(dataHtml);
       }
   })
})

AOS.init({
  once:true
});