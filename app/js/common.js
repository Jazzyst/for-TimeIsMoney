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

	$(".header-wrap__menu li").click(function(){
		$(".header-wrap__menu li").removeClass("active");
		$(this).addClass("active");
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


	// hover of tariff-wrap__item
 $('.btn-basic').hover(
    function(){
        $('.basic').css('background-color','#49cbcd');
    },
    function(){
        $('.basic').css('background-color','#485460');
    }
);

$('.btn-top').hover(
    function(){
        $('.top').css('background-color','#49cbcd');
    },
    function(){
        $('.top').css('background-color','#485460');
    }
);

$('.btn-premium').hover(
    function(){
        $('.premium').css('background-color','#49cbcd');
    },
    function(){
        $('.premium').css('background-color','#485460');
    }
);

// scroll

$(".header-wrap__menu ul a").mPageScroll2id({
	// offset : 50
});
$(".up").mPageScroll2id();
$(".hidden-mnu ul a").mPageScroll2id();

// animation

$(".team h2, .contacts h2").animated("fadeInUp", "fadeOutDown");
$(".item1, .item2, .contacts-wrap__social").animated("fadeInLeft", "fadeOutLeft");
$(".item3, .item4, .contacts-wrap__form").animated("fadeInRight", "fadeOutRight");
$(".tariff-wrap__item").animated("bounceIn", "bounceOut");
});
