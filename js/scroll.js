(function () {
  $('.home').on('click', function() {
    $('html, body').animate({
      scrollTop: $("#splash").offset().top
    }, 'slow');
  })

  $('.about').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 60
    }, 'slow');
  })

  $('.portfolio').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 60
    }, 'slow');
  })

  $('.contact').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 60
    }, 'slow');
  })
})();
