$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.navbar-fixed-top').addClass('transparent');
  } else {
    $('.navbar-fixed-top').removeClass('transparent');
  }
});

$(document).ready(function() {
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this);

    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $bgobj.css({
        backgroundPosition: coords
      });
    });
  });
});

$(function() {
		$('.popup').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');
		});
});

$(window).resize(function () {
  if ($(window).width() < 606) {
        $('.swap').removeClass('col-xs-6');
        $('.swap').addClass('col-sm-6');
      } else {
        $('.swap').addClass('col-xs-6');
        $('.swap').removeClass('col-sm-6');
      }
});

//
// $(function(){
//   var $window = $(window);
//
//   function swap() {
//     if ($window.width() < 606) {
//       $('.swap').removeClass('.col-xs-6');
//       $('.swap').addClass('.col-sm-6');
//     } else {
//       $('.swap').addClass('.col-xs-6');
//       $('.swap').removeClass('.col-sm-6');
//     }
//   }
// });
