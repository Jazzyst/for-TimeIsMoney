$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	// toggle menu for small devices (767px)
	$(".toggle_mnu").click(function() {
			$(this).toggleClass("on");
			$(".main-mnu").slideToggle();
			$(".sandwich").toggleClass("active");
		});


	$('.main-mnu li').click(function(){
    $(".main-mnu").slideToggle();
    $(".sandwich").toggleClass("active");
  });

	//slick slider
	$('.single-item').slick({
		infinite: true,
		dots: false,
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		nextArrow: '<span class="ti-angle-right"></span>',
		prevArrow: '<span class="ti-angle-left"></span>',
	});

});
