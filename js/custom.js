(function($){
    'use strict';

$('.menu_icon i.bx-menu').on('click', function(){
    $('.header_menu').animate({left:0});
    $(this).hide();
    $('.menu_icon i.fa-xmark').show();
});

$('.menu_icon i.fa-xmark').on('click', function(){
    $('.header_menu').animate({left:-250});
    $(this).hide();
    $('.menu_icon i.bx-menu').show();
});


$('.header_menu a').on('click', function(){
    $('.header_menu a').removeClass('active');
    $(this).addClass('active');
});

$(window).scroll(function(){
    var distance = $(window).scrollTop();

    if( distance > 300 ){
        $('header').addClass('header');
    }
    else{
        $('header').removeClass('header');
    }
});


$('.about_button button').on('click', function(){
    $('span.hidden_content').toggle();
});

// wow animation

var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animate__animated', // animation css class (default is animated)
	  offset:       0,          // distance to the element when triggering the animation (default is 0)
	  mobile:       true,       // trigger animations on mobile devices (default is true)
	  live:         true,       // act on asynchronously loaded content (default is true)
	  callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null,    // optional scroll container selector, otherwise use window,
	  resetAnimation: true,     // reset animation on end (default is true)
	}
  );
  wow.init();

})(jQuery);

function validation(){
	var userName = document.getElementById('username'),
	 	userEmail = document.getElementById('usermail');

	// Name
	if ( userName.value == '' ) {
		document.getElementById('user-error').innerHTML = 'Please Enter Your Name';
		return false;
	}
	else{
		document.getElementById('user-error').innerHTML = '';
	}
	//email
	if ( userEmail.value == '' ) {
		document.getElementById('email-error').innerHTML = 'Please Enter Your Name';
		return false;
	}
	else{
		document.getElementById('email-error').innerHTML = '';
	}
}