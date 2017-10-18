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

	//Карусель
	//Документация: http://owlgraphic.com/owlcarousel/
	/*var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});*/
	$(".picture").owlCarousel({
		loop:true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		
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


	//Прогресс бар
	/*
	var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 0,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#34bdff', width: 6 },
  to: { color: '#34bdff', width: 6 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100) + "%";
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"MontserratRegular", Helvetica, sans-serif';
bar.text.style.fontSize = '11px';
bar.animate(1.0);  // Number from 0.0 to 1.0

	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});*/
	
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

});