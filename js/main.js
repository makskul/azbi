$(document).ready(function() {
	$('.projects').slick({ 
		dots: false,
		items:1
	});

	$('.rec-container').slick({ 
		dots: true,
		items: 1
	});

	$('.cert-container').slick({ 
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
		    }
	    ]
	});
	
	$('.small-gallery-h').slick({ 
		dots: false,
		items:1,
		prevArrow: "<div class='small-gallery-left js-gal-l'></div>",
		nextArrow: "<div class='small-gallery-right js-gal-r'></div>",
	});

	$('ul.row').on('click', 'li:not(.active)', function() {
	    $(this).addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.js-show-menu').on('click', function() {
		$('.header-menu').toggle();
	});

});