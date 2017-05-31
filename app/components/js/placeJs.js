
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
			slideWidth: 660,
			minSlides: 4,
			maxSlides: 4,
			speed: 500,
		});
	});


	
	
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[400,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        autoPlay:true
    });
});


  $("#photograph").animatedModal();
    

