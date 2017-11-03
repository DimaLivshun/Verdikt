$(document).ready(function() {


	//hamburger
	$(".hide_button").click(function(){
		$(".my_menu ul").slideToggle();
	});


	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//slick слайдер
	$('.multiple-items').slick({
		infinite: false,
		dots: true,
		slidesToShow: 1,
		initialSlide: 1,
    	аccessibility: false,
    	variableWidth: true
  	});

	//Переключатель между блоками
	$(document).ready(function(){
	    $('.tabs_menu a').click(function(e) {
	        e.preventDefault();
	        $('.tabs_menu .active').removeClass('active');
	        $(this).addClass('active');
	        var tab = $(this).attr('href');
	        $('.tab').not(tab).css({'display':'none'});
	        $(tab).fadeIn(400);
	    });
	});
	$(document).ready(function(){
	    $('.tabs_menu-two a').click(function(e) {
	        e.preventDefault();
	        $('.tabs_menu-two .active').removeClass('active');
	        $(this).addClass('active');
	        var tab = $(this).attr('href');
	        $('.tab-2').not(tab).css({'display':'none'});
	        $(tab).fadeIn(400);
	    });
	});

	$('article').readmore({
		speed: 250,
		maxHeight: 55,
		heightMargin: 10,
		moreLink: '<a href="#" style="color:#44c8f8;">Read more...</a>' ,
		lessLink: '<a href="#" style="color:#44c8f8;">Close</a>',
	});
	
	

	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});



	//кнопка  Readmore
	// Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more...";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

});