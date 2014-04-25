(function($){
	$(function(){
		var isiOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		var $window = $(window);
		var navbar = $('.navbar-transparent');
		var jumbotron = $('.jumbotron');

		$window.on('scroll', function(event){
			if($window.scrollTop() > $window.height()){
				navbar
					.addClass('navbar-opaque')
					.removeClass('navbar-transparent');
			} else {
				navbar
					.addClass('navbar-transparent')
					.removeClass('navbar-opaque');
			}
		});

		navbar.find('a').on('click', function(){
			$(".navbar-toggle:visible").click();
		});

		if(isiOS){
			jumbotron.css({
				"height": "100vh"
			});
		}


	})
})(jQuery);