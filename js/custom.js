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
